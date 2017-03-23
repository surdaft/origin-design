// const Vue = require('vue');

Vue.component('friend', {
    template: `
        <li>
            <div class="profile">
                <div class="profile-picture">
                    <img v-bind:src="user.avatar" alt="Profile Picture">
                </div>
                <div class="details">
                    <a class="username" href="#">{{user.username}}</a>
                    <span class="game" v-if="user.game !== null">
                        Playing {{user.game}}
                    </span>
                    <span class="last-seen" v-if="user.lastSeen !== null">
                        Last seen {{user.lastSeen}}
                    </span>
                </div>
                <div class="status" v-bind:class="{
                    'status-online': user.status === 1,
                    'status-away': user.status === 2,
                    'status-offline': user.status === 0
                }">
                    <i class="fa fa-circle" aria-hidden="true"></i>
                </div>
            </div>
        </li>
    `,
    props: ['user']
});

Vue.component('friend-list', {
    template: `
        <section class="friends-list tab">
            <span class="label">{{online.length}} Friends Online</span>
            <ul class="online">
                <friend v-for="(user, index) in online" :user="user" :key="index"></friend>
            </ul>
            <span class="label">{{offline.length}} Friends Offline</span>
            <ul class="offline">
                <friend v-for="(user, index) in offline" :user="user" :key="index"></friend>
            </ul>
        </section>
    `,
    props: ['users'],
    computed: {
        online: function() {
            return this.users.filter(function(user) {
                return user.status !== 0;
            });
        },
        offline: function() {
            return this.users.filter(function(user) {
                return user.status === 0;
            });
        }
    }
});

Vue.component('message', {
    template: `
        <li>
            <div class="message">
                <a href="#" class="username">{{message.user.username}}</a>
                <span class="timestamp">{{message.recieved}}</span>
            </div>
        </li>
    `,
    props: ['message']
});

Vue.component('message-list', {
    template: `
        <ul class="messages">
            <message v-for="(message, index) in messages" :key="index" :message="message"></message>
        </ul>
    `,
    props: ['messages']
});

var friends = [
    {
        "username": "GekoKid",
        "status": 1,
        "game": "Rocket League",
        "lastSeen": null,
        "avatar": "assets/img/avatar_placeholder.png"
    },
    {
        "username": "Okubi0",
        "status": 0,
        "game": null,
        "lastSeen": "4w ago",
        "avatar": "assets/img/avatar_placeholder.png"
    },
    {
        "username": "Deadpan",
        "status": 1,
        "game": "Need for Speed",
        "lastSeen": null,
        "avatar": "assets/img/avatar_placeholder.png"
    },
    {
        "username": "LadyDaft",
        "status": 0,
        "game": null,
        "lastSeen": "2d ago",
        "avatar": "assets/img/avatar_placeholder.png"
    },
    {
        "username": "Faybuh",
        "status": 1,
        "game": null,
        "lastSeen": null,
        "avatar": "assets/img/avatar_placeholder.png"
    }
];

const app = new Vue({
    el: '#app-wrapper',
    data: {
        tab: 'friends',
        users: friends,
        messages: [
            {
                user: friends[4],
                recieved: '2m ago'
            }
        ]
    }
});
