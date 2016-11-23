var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

var sprite;

function preload() {

    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
                
    game.load.spritesheet('chr', 'sample.png', 92, 95, 5);

  }

function create() {

    sprite = game.add.sprite(40, 100, 'chr');
    sprite.animations.add('walk',[2, 3, 4, 5],1);
    sprite.animations.play('walk', 1200);
//    game.add.tween(sprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

  }

    //  update isn't called until 'create' has completed. If you need to process stuff before that point (i.e. while the preload is still happening)
    //  then create a function called loadUpdate() and use that
    

