var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});

var sprite;

function preload() {

    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
                
    game.load.spritesheet('chr', 'img/monster_squirrel.png', 54, 49, 5);

  }

function create() {

    sprite = game.add.sprite(40, 100, 'chr');

    game.physics.arcade.enable(sprite);
//    sprite.body.bounce.y = 0.2;
    sprite.body.gravity.y = 300;
    sprite.body.collideWorldBounds = true;

    sprite.animations.add('stand',[0]);
    sprite.animations.add('walk',[1, 2]);
    sprite.animations.add('jump',[3,4]);
//    sprite.animations.add('climb',[6, 7]);
//    sprite.animations.add('attack',[8, 9, 10]);
}

function update() {

    LEFT = game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
    RIGHT = game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
    UP = game.input.keyboard.isDown(Phaser.Keyboard.UP);
    DOWN = game.input.keyboard.isDown(Phaser.Keyboard.DOWN);
    ATTACK = game.input.keyboard.isDown(Phaser.Keyboard.CONTROL);
    JUMP = game.input.keyboard.isDown(Phaser.Keyboard.X);

    if (LEFT){       
        sprite.body.velocity.x = -120;
        sprite.animations.play('walk',5,true);
    }

    if (RIGHT) {
        sprite.body.velocity.x = 120;
        sprite.animations.play('walk',5,true);
    }

    if(!LEFT && !RIGHT){
        sprite.body.velocity.x = 0;
    }

/*    if (UP) {
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = -120;
        sprite.animations.play('climb',5,true);
    }
      
    if (DOWN) {
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 120;
        sprite.animations.play('climb',5,true);
    }*/

    if (JUMP) {
        // sprite.body.velocity.y = -200;
         sprite.animations.play('jump',5,true);
    }

/*    if (ATTACK) {
        sprite.animations.play('attack',5,true);
    }*/

    if (!LEFT && !RIGHT &&/* !UP && !DOWN && !ATTACK &&*/ !JUMP){
            sprite.animations.play('stand',5,true);
    }




}
