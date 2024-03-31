// TODO: set enemy health, deduct enemy health by 1, show enemy health bar
const QUOTES = [
  `“If a story is in you, it has to come out.”
  —William Faulkner`,
  `“I love writing. I love the swirl and swing of words as they tangle with human emotions.”
  —James Michener`,
  `“Your intuition knows what to write, so get out of the way.”
  —Ray Bradbury`,
  `“A writer, I think, is someone who pays attention to the world.”
  —Susan Sontag`,
  `“The scariest moment is always just before you start.”
  —Stephen King`,
  `“Fill your paper with the breathings of your heart.”
  —William Wordsworth`,
  `“That's the thing about books, they let you travel without moving your feet.”
  —Jhumpa Lahiri`,
  `“And now that you don't have to be perfect, you can be good.”
  —John Steinbeck`,
  `“I don't wait for moods. You accomplish nothing if you do that. Your mind must know it has got to get down to work.”
  —Pearl S. Buck`,
  `“No need to force yourself to do something the “right way” if it’s not your right way. Your job is to honor your process.”
  —Andi Cumbo`,
  `“Writing is a calling, not a choice.”
  —Isabel Allende`,
  `“For your born writer, nothing is so healing as the realization that he has come upon the right word.”
  —Catherine Drinker Bowen`,
  `“Instructions for living a life.
  Pay attention.
  Be astonished.
  Tell about it.”
  ―Mary Oliver`,
  `“When I write, I give people access to their own emotions.”
  —Gord Downie`,
  `Getting it Right

  “Lying in front of the house all
  afternoon, trying to write a poem.
  Falling asleep.
  Waking up under the stars.”
  
  —Jack Gilbert`,
  `“Give me books, fruit, French wine, fine weather and a little music.”
  —John Keats`,
  `“The idea is to write it so that people hear it and it slides through the brain and goes straight to the heart.”
  —Maya Angelou`,
  `“We write to taste life twice, in the moment and in retrospect.”
  ―Anaïs Nin`,
  `“Start writing, no matter what. The water does not flow until the faucet is turned on.”
  ―Louis L'Amour`,
  `“There is something delicious about writing the first words of a story. You never quite know where they'll take you.”
  ―Beatrix Potter`,
  `“A word after a word after a word is power.”
  ―Margaret Atwood`,
  `“The purpose of a writer is to keep civilization from destroying itself.”
  ―Albert Camus`,
  `“My aim is to put down on paper what I see and what I feel in the best and simplest way.”
  ―Ernest Hemingway`,
  `“A good poem is a contribution to reality. The world is never the same once a good poem has been added to it. A good poem helps to change the shape of the universe, helps to extend everyone's knowledge of himself and the world around him.”
  ―Dylan Thomas`,
  `“If something inside of you is real, we will probably find it interesting, and it will probably be universal. So you must risk placing real emotion at the center of your work. Write straight into the emotional center of things.”
  —Anne Lamott`,
  `“It is our choices that show what we truly are, far more than our abilities.”
  —J.K. Rowling`,
  `“Hope for the best, plan for the worst.”
  —Lee Child`,
//  writing prompts
  `Prompt: 
  You find strange, muddy footprints leading up to your front door.`,
  `Prompt:  
  A stranger sits down next to you on a train and gets up, leaving a package behind. Do you investigate the package?`,
  `Prompt: 
  You hear news of your next-door neighbor vanishing without a trace.`,
  `Prompt:
  One day the national news channel shuts off. And the next day after that, too.`,
  `Prompt:
  One day at work, you look across the street to see a hooded figure in a black coat pointing directly at you. What do they want?`,
  `Prompt:
  Left at the altar, you decide to seek revenge on your ex.`,
  `Prompt:
  You got ditched at the last minute before prom, who will your date be?`,
  `Prompt:
  A stranger texts the wrong number, and accidentally sends you a declaration of love. The message is so sweet and heartfelt that you know you can't let it go.`,
  `Prompt:
  A divorced former couple find each other on the same flight to Paris… Sitting next to each other.`,
  `Prompt:
  After joining an adult swim league, you realize that your coach is irresistibly cute.`,
  `Prompt:
  Your husband accidentally sends you a text meant for his mistress.`,
  `Prompt:
  You and a hot stranger get trapped in an elevator.`,
  `Prompt:
  You wake up one morning to find out that you get to move to any planet of your choosing.`,

];
// const background = new Sprite({
//     position: {
//       x: 0,
//       y: 0
//     },
//     imageSrc: './img/background.png'
//   })

//   const shop = new Sprite({
//     position: {
//       x: 600,
//       y: 128
//     },
//     imageSrc: './img/shop.png',
//     scale: 2.75,
//     framesMax: 6
//   })
let finalGoal = 0,
  currentWordCount = 0;
let didValChange = false;
let notifDisplayed = false;
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

let width = screen.width;

canvas.width = width;
canvas.height = 250;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0;

/*const background = new Sprite({
  position: {
    x: 0,
    y: -275
  },
  imageSrc: './img/background.png'
});*/

/*const background_lamp = new Sprite({
  position: {
    x: 100,
    y:-70
  },
  imageSrc: './img/lamp.png'
});*/

const player = new Fighter({
  health: 100,
  position: {
    x: width / 4,
    y: -100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/samuraiMack/Idle.png",
  framesMax: 8,
  scale: 2.5,
  sprites: {
    idle: {
      imageSrc: "./img/samuraiMack/Idle.png",
      framesMax: 8,
    },
    run: {
      imageSrc: "./img/samuraiMack/Run.png",
      framesMax: 8,
    },
    jump: {
      imageSrc: "./img/samuraiMack/Jump.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "./img/samuraiMack/Fall.png",
      framesMax: 2,
    },
    attack1: {
      imageSrc: "./img/samuraiMack/Attack1.png",
      framesMax: 6,
    },
    attack2: {
      imageSrc: "./img/samuraiMack/Attack2.png",
      framesMax: 6,
    },
    takeHit: {
      imageSrc: "./img/samuraiMack/Take Hit - white silhouette.png",
      framesMax: 4,
    },
    death: {
      imageSrc: "./img/samuraiMack/Death.png",
      framesMax: 6,
    },
  },
  attackBox: {
    offset: {
      x: 220,
      y: 120,
    },
    width: 160,
    height: 50,
  },
});

const enemy = new Fighter({
  health: 100,
  position: {
    x: width / 2 - 55,
    y: -90,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "blue",
  offset: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/kenji/Idle.png",
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 215,
    y: 20,
  },
  sprites: {
    idle: {
      imageSrc: "./img/kenji/Idle.png",
      framesMax: 4,
    },
    run: {
      imageSrc: "./img/kenji/Run.png",
      framesMax: 8,
    },
    jump: {
      imageSrc: "./img/kenji/Jump.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "./img/kenji/Fall.png",
      framesMax: 2,
    },
    attack1: {
      imageSrc: "./img/kenji/Attack1.png",
      framesMax: 4,
    },
    attack2: {
      imageSrc: "./img/kenji/Attack2.png",
      framesMax: 4,
    },
    takeHit: {
      imageSrc: "./img/kenji/Take hit.png",
      framesMax: 3,
    },
    death: {
      imageSrc: "./img/kenji/Death.png",
      framesMax: 7,
    },
  },
  attackBox: {
    offset: {
      x: -100,
      y: 200,
    },
    width: 170,
    height: 50,
  },
});

function animate() {
  window.requestAnimationFrame(animate);
  //c.fillStyle = "rgb(120 146 211)"; //-OG background
  ///////c.fillStyle = "rgb(85, 119, 157)"; //new_blue
  //c.fillstyle = "rgb(56, 120, 176)";
  ///////c.fillRect(0, 0, canvas.width, canvas.height);
  //background.update();
  //background_lamp.update();
  // shop.update();
  c.fillStyle ="#EDE9D0"; //"#305870" ; //"#6088b0 Color on canvas in Samurai improved UI";
  //c.fillstyle = '';
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;

  player.switchSprite("idle");
  enemy.switchSprite("idle");

  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy,
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    enemy.updateHealth(finalGoal, currentWordCount);
    player.isAttacking = false;
    gsap.to("#enemyHealth", {
      width: enemy.health + "%",
    });
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false;
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player,
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.updateHealth(finalGoal, currentWordCount);
    enemy.isAttacking = false;

    gsap.to("#playerHealth", {
      width: player.health + "%",
    });
  }

  // if player misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false;
  }

  // end game based on health
  // if (enemy.health > 0) {
  //   enemy.switchSprite("idle");
  // }
}

animate();

// updating wordcount
document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.querySelector("dialog");
  dialog.showModal();
  let mainarea = document.getElementById("main");
  if (mainarea != null) {
    mainarea.placeholder = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    mainarea.addEventListener("input", (e) => {
      let value = e.target.value;
      let tokens = value.split(/[\s\n]/g).filter((el) => el.trim().length > 0);
      if (currentWordCount < tokens.length && !enemy.dead) {
        player.attack();
      }
      currentWordCount = tokens.length;
      enemy.updateHealth(finalGoal, currentWordCount);
      updateValue();
    });
  }
});

function updateValue() {
  if (finalGoal - currentWordCount <= 0) {
    document.getElementById("remainingArea").innerText =
      "You have completed your goal!!";
    if (!notifDisplayed) {
      addNotification(`You Won!!!
      You have completed your goal!!`);
    }
    notifDisplayed = true;
    if (currentWordCount > finalGoal) {
      document.getElementById("bonusArea").style.display = "block";
      document.getElementById("bonusword").innerText =
        currentWordCount - finalGoal;
    } else {
      document.getElementById("bonusArea").style.display = "none";
    }
  } else {
    notifDisplayed = false;
    document.getElementById("bonusArea").style.display = "none";
    document.getElementById(
      "remainingArea"
    ).innerHTML = `Words remaining: <span id="remainingcount">${
      finalGoal - currentWordCount
    }</span>`;
  }
}
function editGoal() {
  const dialog = document.querySelector("dialog");
  dialog.showModal();
}

function setGoal() {
  const inputbox = document.getElementById("goal");
  if(inputbox.value.trim() === ""){
    alert("Please enter a wordcount goal to play!!");
    return;
  }
  finalGoal = Number.parseInt(inputbox.value);
  if (finalGoal < 10 || finalGoal > 10000) {
    alert("Goal should be between 10 and 10000 words","failure");
    return;
  }
  // enemy.health += 100 % (finalGoal - currentWordCount);
  // if (currentWordCount <= finalGoal){
  //   enemy.dead = false;
  //   enemy.switchSprite("idle");
  //   enemy.update();
  // }
  const dialog = document.querySelector("dialog");
  dialog.close();
  document.getElementById("finalvalue").innerText = ""+ Math.floor(finalGoal);
  updateValue();
}

// file downloading
function downloadText() {
  let mainarea = document.getElementById("main");
  download("draft.txt", mainarea.value);
}
function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

var cssnum=1;

//update css file path
function updatecssfilepath(){
  
  switch(cssnum){
    case 1:
      document.getElementById("cssid").innerHTML="<link rel='stylesheet' href=index_formal.css>";
      cssnum=2;
      console.log("in 1 | changing cssnum="+cssnum);
      break;
    case 2:
      document.getElementById("cssid").innerHTML="<link rel='stylesheet' href=index.css>";
      cssnum=1;
      console.log("in 2 | changing cssnum="+cssnum);
      break;

  }
  
  
}

function addNotification(message, status = "success") {
  //create notification
  const NotiElement = document.createElement("div");
  NotiElement.id = "stickyNotification";
  if (status.trim().toLowerCase() === "success") {
    NotiElement.style.backgroundColor = "rgb(93, 212, 93)";
    NotiElement.style.color = "rgb(0, 145, 0)";
  } else {
    NotiElement.style.backgroundColor = "rgb(255, 103, 103)";
    NotiElement.style.color = "rgb(202, 32, 32)";
  }
  // adding message span
  const messageSpan = document.createElement("span");
  messageSpan.innerText = message;
  NotiElement.appendChild(messageSpan);

  //adding close button
  const closeButton = document.createElement("button");
  closeButton.innerText = "X";
  closeButton.id = "closeBtn";
  closeButton.addEventListener("click", function () {
    console.log("closed clicked");
    document.body.removeChild(NotiElement);
  });
  NotiElement.appendChild(closeButton);

  document.body.appendChild(NotiElement);
  //keep it always at the bottom corner of the window
  setTimeout(() => {
    document.body.removeChild(NotiElement);
  }, 5000);
  // document.addEventListener("scroll", (event) => {
  //     let btmPos = -window.scrollY + 10;
  //     NotiElement.style.bottom = btmPos + "px";
  //   });
}
