var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});

var sprite;

function preload() {

    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
                
    game.load.spritesheet('chr', 'img/sample.png', 93, 95, 11);

  }

function create() {

    sprite = game.add.sprite(40, 100, 'chr');

    RIGHT = game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
    GoLeft = game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
    UP = game.input.keyboard.isDown(Phaser.Keyboard.UP);
    DOWN = game.input.keyboard.isDown(Phaser.Keyboard.DOWN);
    ATTACK = game.input.keyboard.isDown(Phaser.Keyboard.CONTROL);
    JUMP = game.input.keyboard.isDown(Phaser.Keyboard.X);

    game.physics.arcade.enable(sprite);
//    sprite.body.bounce.y = 0.2;
    sprite.body.gravity.y = 300;
    sprite.body.collideWorldBounds = true;

    sprite.animations.add('stand',[0]);
    sprite.animations.add('walk',[1, 2, 3, 4]);
    sprite.animations.add('jump',[5]);
    sprite.animations.add('climb',[6, 7]);
    sprite.animations.add('attack',[8, 9, 10]);
}

function update() {
    if (GoLeft){       
        sprite.body.velocity.x = -120;
        sprite.animations.play('walk',5,true);
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        sprite.body.velocity.x = 120;
        sprite.animations.play('walk',5,true);
    }

    if(!game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && !game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
        sprite.body.velocity.x = 0;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = -120;
        sprite.animations.play('climb',5,true);
    }
      
    if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 120;
        sprite.animations.play('climb',5,true);
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.X)) {
         sprite.body.velocity.y = -350;
         sprite.animations.play('jump',5,true);
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.CONTROL)) {
        sprite.animations.play('attack',5,true);
    }

    if (!game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && !game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && !game.input.keyboard.isDown(Phaser.Keyboard.UP) && !game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
        if( !game.input.keyboard.isDown(Phaser.Keyboard.CONTROL)){
            sprite.animations.play('stand',5,true);
        }
    }




}
