import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    private uid: string;
    private authUser: firebase.User = null;

    constructor() {
    }

    getUID() {
        return this.uid;
    }

    setAuthUser(user: firebase.User) {
        this.authUser = user;
        this.uid = this.authUser.uid;
    }

    getAuthUser() {
        return this.authUser;
    }

    checkIfCurrentUser(uid) {
        let isCurrentuser = true;
        if (this.uid !== uid) {
            isCurrentuser = false;
        }
        return isCurrentuser;
    }

    getUserProfile(uid) {
        return firebase.database().ref('users/' + uid).once('value');
    }

    uploadProfileImage(imgstring, uid) {
        return firebase.storage().ref('profileimgs/' + uid + '/profile.jpg').putString(imgstring, 'data_url');
    }

    getProfileImage(uid) {
        return firebase.storage().ref('profileimgs/' + uid + '/profile.jpg').getDownloadURL();
    }

    updateProfileImageOnDB(uid, imgurl) {
        return firebase.database().ref('users/' + uid).update({
            profileimg: imgurl
        });
    }

    updateDeviceToken(token) {
        return firebase.database().ref('users/' + this.uid).update({
            token: token
        });
    }

    updateNotiSetting(setting) {
        return firebase.database().ref('users/' + this.uid).update({
            noti: setting
        });
    }

    updateLocation(uid, location) {
        return firebase.database().ref('users/' + uid + '/location').update({
            lat: location.lat,
            long: location.long
        });
    }

    /**
     * Message
     */
    getMessageDataRef(itemId: string, chatRoomId: string) {
        return firebase.database().ref('messages/' + itemId + '/' + chatRoomId);
    }

    getAllChatHistoryRef() {
        return firebase.database().ref('messages');
    }

    sendMessage(itemId, chatRoom, item) {
        return firebase.database().ref('messages/' + itemId + '/' + chatRoom).push(item);
    }

    // async getAllUnreadMessages() {
    //   const uid = this.getUID();
    //   const messagesSnapshot = await firebase.database().ref("messages").once("value");
    //   let numUnRead = 0;
    //   messagesSnapshot.forEach(function(byItemSnapshot) {
    //     let key = byItemSnapshot.key;
    //     let arrUsers = key.split("-");
    //     byItemSnapshot.forEach(function(dataSnapshot) {
    //       let isInCluded = arrUsers.indexOf(uid);
    //       if(isInCluded > -1 && uid !== dataSnapshot.val().uid) {
    //         numUnRead++;
    //       }
    //     })
    //   });
    //   return numUnRead;
    // }

    deleteMessage(itemId) {
        return firebase.database().ref('messages/' + itemId).remove();
    }

    /**
     * Shop Item
     */
    getNewBoardItemKey() {
        return firebase.database().ref('boardItems').push().key;
    }

    addNewBoardItem(key, item) {
        item.createdat = firebase.database.ServerValue.TIMESTAMP;
        return firebase.database().ref('boardItems/' + key).update(item);
    }

    getAllSurfBoard() {
        return firebase.database().ref('boardItems').once('value');
    }

    getAllSurfBoardRealtime() {
        return firebase.database().ref('boardItems');
    }

    getSpecificBoardInfo(boardId) {
        return firebase.database().ref('boardItems/' + boardId).once('value');
    }

    uploadBoardImage(imgString, ownerid, imgref) {
        return firebase.storage().ref('boardimgs/' + ownerid + '/' + imgref + '.jpg').putString(imgString, 'data_url');
    }

    getBoardImgUrl(ownerid, imgref) {
        return firebase.storage().ref('boardimgs/' + ownerid + '/' + imgref + '.jpg').getDownloadURL();
    }

    addFavoriteProducts(items) {
        return firebase.database().ref('users/' + this.uid + '/favorite').update({
            products: items
        });
    }

    updateItemInfo(item) {
        return firebase.database().ref('boardItems/' + item.id).update(item);
    }

    deleteItem(itemid) {
        return firebase.database().ref('boardItems/' + itemid).remove();
    }

    /**
     * Weather Report
     */
    async setWeatherReport(postfile, item) {
        const itemKey = firebase.database().ref('weatherreport/' + item.locationId).push().key;
        if (postfile !== '') {
            item.postfile.data = await this.uploadPostImg(postfile, itemKey, item.postfile.type);
        }
        item.id = itemKey;
        return firebase.database().ref('weatherreport/' + item.locationId + '/' + itemKey).update(item);
    }

    async uploadPostImg(postimg, key, type) {
        let filename = 'postimg.jpg';
        if (type == 1) {
            filename = 'postvideo.mp4';
        }
        await firebase.storage().ref('weatherreport/' + key + '/' + filename).putString(postimg, 'data_url');
        return firebase.storage().ref('weatherreport/' + key + '/' + filename).getDownloadURL();
    }

    getWeatherReportsFromLast(locationId) {
        return firebase.database().ref('weatherreport/' + locationId).orderByChild('createdat').limitToLast(4).once('value');
    }

    getWeatherReportsNext(locationId, end) {
        return firebase.database().ref('weatherreport/' + locationId).orderByChild('createdat').limitToLast(11).endAt(end).once('value');
    }

    getAllWeatherReports() {
        return firebase.database().ref('weatherreport');
    }

    getAllWeatherReportsForLocation(locationId) {
        return firebase.database().ref('weatherreport/' + locationId).once('value');
    }

    addFavoriteBeaches(favBeaches) {
        return firebase.database().ref('users/' + this.uid + '/favorite').update({
            beaches: favBeaches
        });
    }

    /**
     * Discussion
     */
    async addDiscussionTopic(item) {
        item.createdat = firebase.database.ServerValue.TIMESTAMP;
        const discussionId = firebase.database().ref('discussion').push().key;
        item.discussionid = discussionId;
        await firebase.database().ref('discussion/' + discussionId).update(item);
        return discussionId;
    }

    getDiscussions() {
        return firebase.database().ref('discussion').once('value');
    }

    addFavDiscussions(favDiscussions) {
        return firebase.database().ref('users/' + this.uid + '/favorite').update({
            discussions: favDiscussions
        });
    }

    /**
     * Discussion Detail
     */
    getAllDiscussionContents() {
        return firebase.database().ref('discussiondetail');
    }

    getDiscussionContentsById(discussionId) {
        return firebase.database().ref('discussiondetail/' + discussionId);
    }

    setDiscussionComment(discussionId, item) {
        const key = firebase.database().ref('discussiondetail/' + discussionId).push().key;
        item.id = key;
        item.createdat = firebase.database.ServerValue.TIMESTAMP;
        return firebase.database().ref('discussiondetail/' + discussionId + '/' + key).update(item);
    }

    /**
     * Locations
     */
    getAllLocations() {
        return firebase.database().ref('locations');
    }

    getLocationById(itemid) {
        return firebase.database().ref('locations/' + itemid);
    }

    logOutUser() {
        return firebase.auth().signOut();
    }

}
