var GameStart = function () {
    // logo.png 이미지를 로딩한다
    collie.ImageManager.addImages({
        "logo": "http://jindo.dev.naver.com/collie/img/small/logo.png",
        "walking": "images/walking.png",
        "soldier": "soldier.png",
        "buttons": "images/arrow-sprite.png"
    });

    // 레이어를 만든다
    var layer = new collie.Layer({
        width: window.innerWidth - 20,
        height: window.innerHeight - 20
    });
    var layer2 = new collie.Layer({
        width: window.innerWidth - 20,
        height: window.innerHeight - 20
    });

    var man = new collie.MovableObject({
        width: 32,
        height: 48,
        spriteX: 32,
        spriteY: 48,
        spriteLength: 16,
        velocityX: 0,
        friction: 0.02,  // 마찰력
        backgroundImage: "walking"
    }).addTo(layer);



    // 버튼 추가
    var buttonUp = new collie.DisplayObject({
        x : 0,
        y : 300,
        width: 48,
        height: 48,
        backgroundImage: "buttons"
    }).addTo(layer2);
    buttonUp.attach({
        "click": function () {

            var x = man.get("velocityX");
            var y = man.get("velocityY");

            man.set("velocityX", x - 1);
            oCtrl.left();
        }
    })

    var buttonDown = new collie.DisplayObject({
        x: 48,
        y: 300,
        width: 48,
        height: 48,
        backgroundImage: "buttons"
    }).addTo(layer2);
    var buttonLeft = new collie.DisplayObject({
        x: 48 + 48,
        y: 300,
        width: 48,
        height: 48,
        spriteX: 48,
        spriteY: 48,
        spriteLength: 4,
        backgroundImage: "buttons"
    }).addTo(layer2);
    var buttonRight = new collie.DisplayObject({
        x: 48 + 48 + 48,
        y: 300,
        width: 48,
        height: 48,
        spriteX: 48,
        spriteY: 48,
        spriteLength: 4,
        backgroundImage: "buttons"
    }).addTo(layer2);



    var oCtrl = {
        _dir: {
            'up': collie.Timer.cycle(man, "8fps", { from: 12, to: 15 }),
            'right': collie.Timer.cycle(man, "8fps", { from: 8, to: 11 }),
            'down': collie.Timer.cycle(man, "8fps", { from: 0, to: 3 }),
            'left': collie.Timer.cycle(man, "8fps", { from: 4, to: 7 })
        },
        up: function () {
            this.stop();
            this._dir["up"].start();
        },
        right: function () {
            this.stop();
            this._dir["right"].start();
        },
        down: function () {
            this.stop();
            this._dir["down"].start();
        },
        left: function () {
            this.stop();
            this._dir["left"].start();
        },
        stop: function () {
            for (var i in this._dir) {
                this._dir[i].stop();
            }
        }
    };
    oCtrl.stop();

    document.onkeydown = function (evt) {
        var x = man.get("velocityX");
        var y = man.get("velocityY");

        switch (evt.keyCode) {
            case 37: // left
                man.set("velocityX", x - 1);
                oCtrl.left();
                break;
            case 38: // up
                man.set("velocityY", y - 1);
                oCtrl.up();
                break;
            case 39: // right
                man.set("velocityX", x + 1);
                oCtrl.right();
                break;
            case 40: // down
                man.set("velocityY", y + 1);
                oCtrl.down();
                break;
        }
    }

    document.onkeyup = function (evt) {
        //oCtrl.stop();
        //man.set("velocityX", 0); 
        //man.set("velocityY", 0); 
    }


    // 레이어를 렌더러에 붙인다
    collie.Renderer.addLayer(layer);
    collie.Renderer.addLayer(layer2);

    // 렌더러를 container 아이디의 엘리먼트에 불러온다
    collie.Renderer.load(document.getElementById("board"));

    // 렌더링을 시작한다
    collie.Renderer.start();
}