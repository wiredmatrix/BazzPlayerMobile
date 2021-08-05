const songs = [
    {
        id: 1,
        title: 'Hero',
        ArtistName: 'Bethany Dilon',
        genre: 'pop',
        picture: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.18169-9/16195530_10211997136709517_8578854309931959016_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEvt5zlNj1bM87SMIgRXz8VjFbfh8f8mfyMVt-Hx_yZ_ISR6pzt6j1tOqssNCwDfnM&_nc_ohc=oQeQeYLPRz8AX_n81Yh&_nc_ht=scontent-los2-1.xx&oh=d87b3097c543a39067095bacfbeb004d&oe=609BF1DC',
        url: require('../../assets/songs/Hero.mp3'),
    },

    {
        id: 2,
        title: 'Advertising URL',
        ArtistName: 'Bethany Dilon',
        genre: 'Soft Rock',
        picture: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-0/s640x640/169534769_1185223728571457_6192837830233317030_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=9267fe&_nc_eui2=AeH2splO8pf4k-atqrUeWWApKjkWnAsELXsqORacCwQte9doNY5rNtBrWht-o_CYYR4&_nc_ohc=plbZA_Pv91EAX_quQhG&_nc_ht=scontent-los2-1.xx&tp=7&oh=abec7b3bd8ddc13b6c3c0c510a33d8dc&oe=60997696',
        url:
            'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
    },

    {
        id: 3,
        title: 'Stronger',
        ArtistName: 'Bethany Dilon',
        genre: 'Country',
        isRequire: true,
        picture: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-0/s640x640/169534769_1185223728571457_6192837830233317030_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=9267fe&_nc_eui2=AeH2splO8pf4k-atqrUeWWApKjkWnAsELXsqORacCwQte9doNY5rNtBrWht-o_CYYR4&_nc_ohc=plbZA_Pv91EAX_quQhG&_nc_ht=scontent-los2-1.xx&tp=7&oh=abec7b3bd8ddc13b6c3c0c510a33d8dc&oe=60997696',
        url: require('../../assets/songs/Stronger.mp3'),
    },

    {
        id: 4,
        title: 'Faded',
        ArtistName: 'Luchee',
        genre: 'Techno',
        picture: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-0/s640x640/169534769_1185223728571457_6192837830233317030_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=9267fe&_nc_eui2=AeH2splO8pf4k-atqrUeWWApKjkWnAsELXsqORacCwQte9doNY5rNtBrWht-o_CYYR4&_nc_ohc=plbZA_Pv91EAX_quQhG&_nc_ht=scontent-los2-1.xx&tp=7&oh=abec7b3bd8ddc13b6c3c0c510a33d8dc&oe=60997696',
        url: 'https://github.com/ShivamJoker/sample-songs/raw/master/Faded.mp3',
    },

    {
        id: 5,
        title: 'Solo',
        ArtistName: 'Solo Cosmos',
        genre: 'Afrobeat',
        isRequire: true,
        picture: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-0/s640x640/169534769_1185223728571457_6192837830233317030_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=9267fe&_nc_eui2=AeH2splO8pf4k-atqrUeWWApKjkWnAsELXsqORacCwQte9doNY5rNtBrWht-o_CYYR4&_nc_ohc=plbZA_Pv91EAX_quQhG&_nc_ht=scontent-los2-1.xx&tp=7&oh=abec7b3bd8ddc13b6c3c0c510a33d8dc&oe=60997696',
        url: 'https://github.com/ShivamJoker/sample-songs/raw/master/Solo.mp3',
    },

    {
        id: 6,
        title: 'Death Bed',
        ArtistName: 'Omowunmi feat Wizkid',
        genre: 'Afrocentric',
        picture: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-0/s640x640/169534769_1185223728571457_6192837830233317030_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=9267fe&_nc_eui2=AeH2splO8pf4k-atqrUeWWApKjkWnAsELXsqORacCwQte9doNY5rNtBrWht-o_CYYR4&_nc_ohc=plbZA_Pv91EAX_quQhG&_nc_ht=scontent-los2-1.xx&tp=7&oh=abec7b3bd8ddc13b6c3c0c510a33d8dc&oe=60997696',
        url: 'https://github.com/ShivamJoker/sample-songs/raw/master/death%20bed.mp3',
    },

    {
        id: 7,
        title: 'Hero',
        ArtistName: 'Bethany Dilon',
        genre: 'pop',
        isRequire: true,
        picture: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.18169-9/16195530_10211997136709517_8578854309931959016_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEvt5zlNj1bM87SMIgRXz8VjFbfh8f8mfyMVt-Hx_yZ_ISR6pzt6j1tOqssNCwDfnM&_nc_ohc=oQeQeYLPRz8AX_n81Yh&_nc_ht=scontent-los2-1.xx&oh=d87b3097c543a39067095bacfbeb004d&oe=609BF1DC',
        url: require('../../assets/songs/Hero.mp3'),
    },

    {
        id: 8,
        title: 'Advertising URL',
        ArtistName: 'Bethany Dilon',
        genre: 'Soft Rock',
        picture: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-0/s640x640/169534769_1185223728571457_6192837830233317030_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=9267fe&_nc_eui2=AeH2splO8pf4k-atqrUeWWApKjkWnAsELXsqORacCwQte9doNY5rNtBrWht-o_CYYR4&_nc_ohc=plbZA_Pv91EAX_quQhG&_nc_ht=scontent-los2-1.xx&tp=7&oh=abec7b3bd8ddc13b6c3c0c510a33d8dc&oe=60997696',
        url:
            'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
    },

    {
        id: 9,
        title: 'Stronger',
        ArtistName: 'Bethany Dilon',
        genre: 'Country',
        isRequire: true,
        picture: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-0/s640x640/169534769_1185223728571457_6192837830233317030_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=9267fe&_nc_eui2=AeH2splO8pf4k-atqrUeWWApKjkWnAsELXsqORacCwQte9doNY5rNtBrWht-o_CYYR4&_nc_ohc=plbZA_Pv91EAX_quQhG&_nc_ht=scontent-los2-1.xx&tp=7&oh=abec7b3bd8ddc13b6c3c0c510a33d8dc&oe=60997696',
        url: require('../../assets/songs/Stronger.mp3'),
    },

    {
        id: 10,
        title: 'Faded',
        ArtistName: 'Luchee',
        genre: 'Techno',
        picture: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-0/s640x640/169534769_1185223728571457_6192837830233317030_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=9267fe&_nc_eui2=AeH2splO8pf4k-atqrUeWWApKjkWnAsELXsqORacCwQte9doNY5rNtBrWht-o_CYYR4&_nc_ohc=plbZA_Pv91EAX_quQhG&_nc_ht=scontent-los2-1.xx&tp=7&oh=abec7b3bd8ddc13b6c3c0c510a33d8dc&oe=60997696',
        url: 'https://github.com/ShivamJoker/sample-songs/raw/master/Faded.mp3',
    },

    {
        id: 11,
        title: 'Solo',
        ArtistName: 'Solo Cosmos',
        genre: 'Afrobeat',
        isRequire: true,
        picture: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-0/s640x640/169534769_1185223728571457_6192837830233317030_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=9267fe&_nc_eui2=AeH2splO8pf4k-atqrUeWWApKjkWnAsELXsqORacCwQte9doNY5rNtBrWht-o_CYYR4&_nc_ohc=plbZA_Pv91EAX_quQhG&_nc_ht=scontent-los2-1.xx&tp=7&oh=abec7b3bd8ddc13b6c3c0c510a33d8dc&oe=60997696',
        url: 'https://github.com/ShivamJoker/sample-songs/raw/master/Solo.mp3',
    },

    {
        id: 12,
        title: 'Death Bed',
        ArtistName: 'Omowunmi feat Wizkid',
        genre: 'Afrocentric',
        picture: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-0/s640x640/169534769_1185223728571457_6192837830233317030_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=9267fe&_nc_eui2=AeH2splO8pf4k-atqrUeWWApKjkWnAsELXsqORacCwQte9doNY5rNtBrWht-o_CYYR4&_nc_ohc=plbZA_Pv91EAX_quQhG&_nc_ht=scontent-los2-1.xx&tp=7&oh=abec7b3bd8ddc13b6c3c0c510a33d8dc&oe=60997696',
        url: 'https://github.com/ShivamJoker/sample-songs/raw/master/death%20bed.mp3',
    },
    
  ];

  export default songs;