var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});

var sprite;

function preload() {

    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
                
    game.load.spritesheet('chr', 'sample.png', 92, 95, 11);

  }

function create() {

    sprite = game.add.sprite(40, 100, 'chr');
    sprite.animations.add('stand',[0]);
    sprite.animations.add('walk',[1, 2, 3, 4]);
    sprite.animations.add('jump',[5]);
    sprite.animations.add('climb',[6, 7]);
    sprite.animations.add('attack',[8, 9, 10]);
 }

function update() {
    if (cusors.left.isDown) {
        sprite.body.velocity.x = -60;
        sprite.animations.play('walk',2,true);
    }

    if (cusors.right.isDown) {
        sprite.body.velocity.x = 60;
        sprite.animations.play('walk',2,true);
    }

    if (cusors.up.isDown) {
        sprite.body.velocity.y = 20;
        sprite.animations.play('climb',2,true);
    }
      
    if (cusors.down.isDown) {
        sprite.body.velocity.y = -20;
        sprite.animations.play('climb',2,true);
    }

    if (cusors.a.isDown) {
        sprite.animations.play('attack',3,true);
    }

}
