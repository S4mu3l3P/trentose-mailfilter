// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]

$(document).ready(function () {
    var MailModel = {
        /**
         * Initialises the model with the "database" of filter rules
         * and messages. This function is already implemented.
         */
        init: function () {
            this.rules = rules;
            this.messages = msgs;
            console.log(this.rules);
            console.log(this.messages);
        },

        getAllmsg: function () {
            return this.messages;
        },

        /**
         * Filters out messages in the "database" that match the spam rules.
         * @return an array of messages, excluding those that match the filter rules.
         */
        filter: function () {
            var newmessages = [];
            var spam_found = 0;
            for (var i = 0; i < this.messages.length; i++) {
                for (var j = 0; j < this.rules.length; j++) {
                    if (this.messages[i].search(this.rules[j]) != (-1)) {
                        spam_found = 1;
                    }
                }
                if (spam_found == 0) {
                    newmessages = newmessages.concat(this.messages[i]);
                    
                } else {
                    var spam_found = 0;
                }
            }
            console.log(newmessages);
            return newmessages;
        }


    };



    var octopus = {

        init: function () {
            MailModel.init();
            mailView.init();
        }

    };

    var mailView = {

        init: function () {
            var htmlStr = '';
            var non_filtered_msg = MailModel.getAllmsg();
            for (var item in non_filtered_msg) {
                htmlStr += '<li>' + non_filtered_msg[item] + '</li>';
            }
            $(".result").html(htmlStr);
            $(".btn-filter").click(function () {
                htmlStr = '';
                var filtered_msg = MailModel.filter();
                for (var item in filtered_msg) {
                    htmlStr += '<li>' + filtered_msg[item] + '</li>';
                }
                $(".result").html(htmlStr);
            });
        }

    };

    octopus.init();
});
