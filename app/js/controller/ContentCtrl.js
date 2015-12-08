angular
    .module('pmapp')
    .controller('ContentCtrl', ['$scope', '$location', '$firebaseArray', function($scope, $location, $firebaseArray) {
        var self = this;
        /*
        //var ref = new Firebase("https://projectdb.firebaseio.com/");
        // GET MESSAGES AS AN ARRAY
        //self.messages = $firebaseArray(ref);
                //ADD MESSAGE METHOD
                self.addMessage = function(e) {
                    //LISTEN FOR RETURN KEY
                    if (e.keyCode === 13 && self.msg) {
                        //ALLOW CUSTOM OR ANONYMOUS USER NAMES
                        var name = self.name || "anonymous";
                        //ADD TO FIREBASE
                        self.messages.$add({
                            from: name,
                            body: self.msg
                        });
                        //RESET MESSAGE
                        self.msg = "";
                    }
                };
        */
        self.columnlist = [{
            name: 'backlog',
            tasklist: [{
                name: 'task01'
            }, {
                name: 'task02'
            }, {
                name: 'task03'
            }]
        }, {
            name: 'in progress',
            tasklist: [{
                name: 'task04'
            }, {
                name: 'task05'
            }, {
                name: 'task06'
            }]
        }, {
            name: 'done',
            tasklist: [{
                name: 'task07'
            }, {
                name: 'task08'
            }, {
                name: 'task09'
            }]
        }];
        self.sortableOptions = {
            //accept: function() {return false;},
            //clone: true,
            //allowDuplicates: true,
            containment: '#sortable-container',
            itemMoved: function(event) {
                //console.log(self.itemlist1, self.itemlist2, self.itemlist3);
                console.log(self.columnlist);
                //console.log(JSON.stringify(self.items));
            }
        };

        console.log('ContentCtrl active');
    }]);
