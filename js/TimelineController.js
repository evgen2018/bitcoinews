(function () {
    var app = angular.module("app");
    app.controller('TimelineController', Controller);
    Controller.$inject = ['$scope', '$timeout'];

    function Controller($scope, $timeout) {
        var vm = this;
        vm.scrollbarOptions = {
            scrollButtons: {
                scrollAmount: 'auto', // scroll amount when button pressed
                enable: true // enable scrolling buttons by default
            },
            advanced: {
                updateOnContentResize: true,
//                autoExpandHorizontalScroll: true
            },
            theme: 'dark-3',
            axis: 'x',
            mouseWheel: false,
        };
        vm.scrollbarWidth = 0;

        vm.timeline = [
            {
                type: "news",
                logo: "images/proofs/cnbc.png",
                title: "Google will ban all cryptocurrency-related advertising",
                text: "Google is cracing down on cryptocurrency-related adver-tising. The company is updating its financial services-related ad policies to ban any advertising.",
                // link: "https://www.cnbc.com/2018/03/13/google-bans-crypto-ads.html",
                date: moment.utc("2018-03-14 12:00:00").format("DD MMM, h:mm A"),
                image: null,
                // isOpened: true,
            },
            {
                type: "software",
                logo: "images/proofs/cnbc.png",
                title: "Bitcoin News Trader Alert of expected downtrend",
                text: null,
                // link: "https://www.cnbc.com/2018/03/13/google-bans-crypto-ads.html",
                date: moment.utc("2018-03-14 13:00:00").format("DD MMM, h:mm A"),
                image: "images/proofs/box2chart1.png",
                // isOpened: true,
            },
            {
                type: "chart",
                logo: "images/proofs/cnbc.png",
                title: null,
                text: null,
                // link: null,
                date: moment.utc("2018-03-14 14:00:00").format("DD MMM, h:mm A"),
                image: "images/proofs/chart1.png",
                image2: "images/proofs/chart1.png",
                // isOpened: true,
            },
            {
                type: "news",
                logo: "images/proofs/exp.png",
                title: "Cryptocurrencies DON'T risk world economies, Mark Carney tells G20",
                text: "CYRPTOCURRENCIES do not pose a risk to world economics, Bank of England Governor Mark Carney has insisted in a letter to members of the G20. Mr Carney, who is chair of the Financial Stability Board (FSB), resisted calls from some G20 members to regulate cryptocurrencies like bitcoin",
                // link: "https://www.express.co.uk/news/world/933658/cryptocurrency-news-bitcoin-price-market-mining-ripple-eretheum",
                date: moment.utc("2018-03-18 21:47:00").format("DD MMM, h:mm A"),
                image: null,
                // isOpened: true,
            },
            {
                type: "software",
                logo: "images/proofs/exp.png",
                title: "Bitcoin News Trader Alert of expected uptrend",
                text: null,
                // link: "https://www.express.co.uk/news/world/933658/cryptocurrency-news-bitcoin-price-market-mining-ripple-eretheum",
                date: moment.utc("2018-03-18 22:00:00").format("DD MMM, h:mm A"),
                image: "images/proofs/box2chart2.png",
                // isOpened: true,
            },
            {
                type: "chart",
                logo: "images/proofs/exp.png",
                title: null,
                text: null,
                // link: null,
                date: moment.utc("2018-03-18 23:00:00").format("DD MMM, h:mm A"),
                image: "images/proofs/chart2.png",
                // isOpened: true,
            },
        ];
        vm.selectedNewsIndex = 2;

        vm.timeline.forEach(function (item) {
            var width = 260;
            if (item.type == 'chart') {
                width = 590;
            }
            vm.scrollbarWidth += width;
        });

        vm.showPrevItem = function () {
            vm.timeline[vm.selectedNewsIndex + 1].isOpened = true;
            vm.timeline[vm.selectedNewsIndex + 2].isOpened = true;
            vm.timeline[vm.selectedNewsIndex + 3].isOpened = true;
            vm.selectedNewsIndex = vm.selectedNewsIndex + 3;
        };
        $timeout(function () {
            updateTimeline();
        }, 300);

        $(window).on("resize", function () {
            updateTimeline();
        });

        function updateTimeline() {
            if ($(window).width() < 1200) {
                $timeout(function () {
                    vm.updateScrollbar("disable", true);
                    // console.log("vm.timeline", vm.timeline);
                    vm.timeline.forEach(function (item) {
                        item.isOpened = false;
                    });
                    vm.timeline[0].isOpened = true;
                    vm.timeline[1].isOpened = true;
                    vm.timeline[2].isOpened = true;
                });
            } else {
                vm.updateScrollbar('scrollTo', "right");
                $timeout(function () {
                    vm.updateScrollbar("update");
                    vm.timeline.forEach(function (item) {
                        item.isOpened = true;
                    });
                });
            }

        }
        
        function getProjectDetails() {
            window.intgrtn.getProjectDetails(function (response) {
                window.intgrtn.store("projectName", response.data.project.name);
            }, function (response) {
                // if Error occurs
            });
        }

       var intgrInterval = setInterval(function () {
            if(window.intgrtn){
                getProjectDetails();
                clearInterval(intgrInterval);
            }
        },300);

    }

}());