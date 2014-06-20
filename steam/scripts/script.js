var app = angular.module('youOnline', []);

app.controller('SteamController', ['$http', function ($http) {
    var stm = this;
    stm.users = [];
    
    //steam is blocked at the school therefore I'm putting the json data right in here
    stm.usersTemp = [{"steamid":"76561198025178884","communityvisibilitystate":3,"profilestate":1,"personaname":"Mithon","lastlogoff":1402863042,"profileurl":"http://steamcommunity.com/id/myfeetsmell/","avatar":"http://media.steampowered.com/steamcommunity/public/images/avatars/72/72974c58b513e6fbc10fdb33a983c1dd6e1d30cd.jpg","avatarmedium":"http://media.steampowered.com/steamcommunity/public/images/avatars/72/72974c58b513e6fbc10fdb33a983c1dd6e1d30cd_medium.jpg","avatarfull":"http://media.steampowered.com/steamcommunity/public/images/avatars/72/72974c58b513e6fbc10fdb33a983c1dd6e1d30cd_full.jpg","personastate":1,"gameextrainfo":"Life","realname":"H","primaryclanid":"103582791431619357","timecreated":1273780775,"personastateflags":0,"loccountrycode":"CA","locstatecode":"ON"},{"steamid":"76561198018464987","communityvisibilitystate":3,"profilestate":1,"personaname":"nintyfan","lastlogoff":1403209180,"profileurl":"http://steamcommunity.com/id/nintyfan/","avatar":"http://media.steampowered.com/steamcommunity/public/images/avatars/e1/e135f415b69531407cf0c86908b77d8777f760fc.jpg","avatarmedium":"http://media.steampowered.com/steamcommunity/public/images/avatars/e1/e135f415b69531407cf0c86908b77d8777f760fc_medium.jpg","avatarfull":"http://media.steampowered.com/steamcommunity/public/images/avatars/e1/e135f415b69531407cf0c86908b77d8777f760fc_full.jpg","personastate":1,"realname":"Eric Stevenson","primaryclanid":"103582791431284381","timecreated":1261613283,"personastateflags":0,"loccountrycode":"CA","locstatecode":"ON"},{"steamid":"76561198043644545","communityvisibilitystate":3,"profilestate":1,"personaname":"Garargar","lastlogoff":1403157389,"profileurl":"http://steamcommunity.com/id/garagar/","avatar":"http://media.steampowered.com/steamcommunity/public/images/avatars/89/8972743c842e5ad60d4c6c0b88b0e71513479d67.jpg","avatarmedium":"http://media.steampowered.com/steamcommunity/public/images/avatars/89/8972743c842e5ad60d4c6c0b88b0e71513479d67_medium.jpg","avatarfull":"http://media.steampowered.com/steamcommunity/public/images/avatars/89/8972743c842e5ad60d4c6c0b88b0e71513479d67_full.jpg","personastate":1,"realname":"William","primaryclanid":"103582791434672565","timecreated":1308690192,"personastateflags":0,"loccountrycode":"CA"},{"steamid":"76561198059385232","communityvisibilitystate":3,"profilestate":1,"personaname":"mike_shz","lastlogoff":1403203439,"commentpermission":1,"profileurl":"http://steamcommunity.com/id/mike_shz/","avatar":"http://media.steampowered.com/steamcommunity/public/images/avatars/b1/b114fe00347c3b01b5b954986cda6904b22c6eec.jpg","avatarmedium":"http://media.steampowered.com/steamcommunity/public/images/avatars/b1/b114fe00347c3b01b5b954986cda6904b22c6eec_medium.jpg","avatarfull":"http://media.steampowered.com/steamcommunity/public/images/avatars/b1/b114fe00347c3b01b5b954986cda6904b22c6eec_full.jpg","personastate":3,"realname":"Michael Song","primaryclanid":"103582791433482731","timecreated":1330142837,"personastateflags":0,"loccountrycode":"CA","locstatecode":"ON"},{"steamid":"76561198057072625","communityvisibilitystate":3,"profilestate":1,"personaname":"LudicrousA","lastlogoff":1403215484,"profileurl":"http://steamcommunity.com/id/LudicrousA/","avatar":"http://media.steampowered.com/steamcommunity/public/images/avatars/6b/6bf52f06cc7d4bef95a2546c409a0f77e4f39a64.jpg","avatarmedium":"http://media.steampowered.com/steamcommunity/public/images/avatars/6b/6bf52f06cc7d4bef95a2546c409a0f77e4f39a64_medium.jpg","avatarfull":"http://media.steampowered.com/steamcommunity/public/images/avatars/6b/6bf52f06cc7d4bef95a2546c409a0f77e4f39a64_full.jpg","personastate":0,"realname":"Julian","primaryclanid":"103582791435044762","timecreated":1326569650,"personastateflags":0,"loccountrycode":"CA"}];
    
   
    
    //refreshes when button is pressed
    stm.refresh = function () {
        $.getJSON("users.json", function(data) {
            stm.usersTemp = data.response.players;
            after();
        });
    }

    
    stm.getStatus = function (user) {
        //checking and calculating state
        var str = "Currently ";
        if (user.personastate == 0) {
            user.status = str + "Offline";
            return str + "Offline";
        }
        if (user.personastate == 1) {
            if (user.gameextrainfo != null) {
                user.inGame = true;
                user.status = str + "In-Game " + user.gameextrainfo;
                return str + "In-Game " + user.gameextrainfo;
            }
            else {
                user.status = str + "Online";
                return str + "Online";
            }
        }
        if (user.personastate == 2) {
            user.status = str + "Busy";
            return str + "Busy";
        }
        if (user.personastate == 3) {
            user.status = str + "Away";
            return str + "Away";
        }
        if (user.personastate == 3) {
            user.status = str + "Away";
            return str + "Away";
        }
        if (user.personastate == 4) {
            user.status = str + "Snooze";
            return str + "Snooze";
        }
        if (user.personastate == 4) {
            user.status = str + "Snooze";
            return str + "Snooze";
        }
    }

    var after = function () {
        var hunter, julian, eric, will, michol;
        
        //Could be refactored into an array, but for readability reasons and for other use cases later Im leaving it like this
        hunter = $.grep(stm.usersTemp, function(e){ return e.steamid == "76561198025178884"; });
        hunter = hunter[0];
        julian = $.grep(stm.usersTemp, function(e){ return e.steamid == "76561198057072625"; });
        julian = julian[0];
        eric = $.grep(stm.usersTemp, function(e){ return e.steamid == "76561198018464987"; });
        eric = eric[0];
        will = $.grep(stm.usersTemp, function(e){ return e.steamid == "76561198043644545"; });
        will = will[0];
        michol = $.grep(stm.usersTemp, function(e){ return e.steamid == "76561198059385232"; });
        michol = michol[0];
        
        //reset
        stm.users = [];
        
        var foo = [eric, julian, hunter, michol, will];
        
        for (i in foo) {
            stm.users.push(foo[i]);
            stm.users[i].inGame = false;
        }
        
        //stm.reload();

        console.log(stm.users);
    };
    
    after();
    
    
    /* This is for if this was taken online
    $http.get('users.json').success(function (data) {
            this.users = data.response;
    });
    */
    
}]);