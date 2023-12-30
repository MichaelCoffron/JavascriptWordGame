const dictionary_usable = [
  "abs", "ace", "act", "add", "age", "ago", "aid", "ail", "aim", "air",
  "ale", "all", "alt", "amp", "and", "ant", "any", "ape", "arc", "are",
  "ark", "arm", "art", "ash", "ask", "ass", "ate", "awe", "axe", "bad",
  "bag", "ban", "bar", "bat", "bay", "bed", "bee", "beg", "ben", "bet",
  "bid", "big", "bin", "bio", "bit", "bob", "bog", "boo", "bop", "bot",
  "bow", "box", "boy", "bra", "bro", "bug", "bum", "bun", "bus", "but",
  "buy", "bye", "cab", "can", "cap", "car", "cat", "cob", "cod", "cog",
  "con", "cop", "cot", "cow", "cry", "cub", "cue", "cum", "cup", "cut",
  "dad", "dam", "dap", "day", "den", "dev", "dew", "dib", "did", "die",
  "dig", "dim", "dip", "doc", "dog", "dot", "dry", "dub", "due", "dug",
  "duo", "dye", "ear", "eat", "eel", "egg", "ego", "elf", "elk", "elm",
  "emu", "end", "eve", "eye", "fad", "fag", "fan", "far", "fat", "fax",
  "fed", "fee", "few", "fib", "fin", "fir", "fit", "fix", "flu", "fly",
  "foe", "fog", "for", "fox", "fry", "fun", "fur", "gag", "gap", "gas",
  "gay", "gel", "gem", "get", "gig", "gin", "god", "goo", "got", "gov",
  "gum", "gun", "gut", "guy", "gym", "had", "hag", "ham", "has", "hat",
  "hay", "hem", "hen", "her", "hex", "hey", "hid", "him", "hip", "his",
  "hit", "hoe", "hog", "hop", "hot", "how", "hub", "hue", "hug", "huh",
  "hum", "hun", "hut", "ice", "icy", "ill", "imp", "ink", "inn", "ivy",
  "jab", "jam", "jar", "jet", "jew", "jig", "job", "joe", "jog", "joy",
  "jug", "keg", "key", "kid", "kin", "kit", "kob", "lab", "lad", "lag",
  "lap", "law", "lax", "lay", "led", "leg", "let", "lid", "lie", "lip",
  "lit", "log", "lot", "low", "mac", "mad", "mag", "man", "map", "mat",
  "may", "meg", "meh", "men", "met", "mew", "mid", "mil", "mom", "moo",
  "mop", "mud", "mug", "nah", "nap", "nat", "nod", "nog", "nor", "not",
  "now", "nun", "nut", "nye", "oak", "oar", "oat", "obi", "odd", "ode",
  'off', 'oil', 'old', 'one', 'orb', 'orc', 'ore', 'our', 'out', 'owl',
  'own', 'pad', 'pal', 'pan', 'pat', 'pay', 'pea', 'pee', 'peg', 'pen',
  'per', 'pet', 'pie', 'pig', 'pin', 'pit', 'poo', 'pop', 'pot', 'pre',
  'pro', 'pry', 'pub', 'pug', 'pun', 'pup', 'pus', 'put', 'rad', 'rag',
  'ram', 'ran', 'rap', 'rat', 'raw', 'ray', 'red', 'ref', 'rep', 'rev',
  'rex', 'rib', 'rid', 'rig', 'rim', 'rip', 'rob', 'rod', 'rub', 'rug',
  'rum', 'run', 'sad', 'sag', 'sap', 'sat', 'saw', 'say', 'sea', 'sec',
  'see', 'set', 'sex', 'she', 'shy', 'sib', 'sim', 'sin', 'sip', 'sir',
  'sis', 'sit', 'six', 'ski', 'sky', 'sly', 'sob', 'sod', 'son', 'sow',
  'soy', 'spa', 'spy', 'sty', 'sub', 'sue', 'sum', 'sun', 'sup', 'sus',
  "tab", "tad", "tag", "tam", "tan", "tap", "tar", "tax", "tea", "ted",
  "tee", "ten", "the", "tho", "thy", "tic", "tid", "tie", "til", "tin",
  "tip", "tit", "tod", "toe", "tog", "tom", "ton", "too", "top", "tor",
  "tow", "toy", "try", "tsk", "tub", "tug", "tum", "tux", "two", "ufo",
  "ugh", "uke", "ups", "urn", "urp", "use", "van", "vat", "veg",
  "vet", "vex", "vid", "vow", "vox", "wad", "wap", "war", "was", "wax",
  "way", "web", "wed", "wee", "wem", "wen", "wet", "who", "why", "wig",
  "win", "wit", "woe", "wok", "won", "woo", "wow", "wry", "yah", "yak",
  "yam", "yap", "yay", "yea", "yep", "yes", "yet", "yin", "yip", "you",
  "yuk", "yum", "yup", "zap", "zel", "zen", "zex", "zig", "zip", "zit",
  "zoo"
]

const dictionary = [
  "aah", "aal", "aas", "aba", "abb", "abo", "abs", "aby", "ace", "ach", 
  "act", "add", "ado", "ads", "adz", "aff", "aft", "aga", "age", "ago", 
  "ags", "aha", "ahi", "ahs", "aia", "aid", "ail", "aim", "ain", "air", 
  "ais", "ait", "aji", "ake", "ala", "alb", "ale", "all", "alp", "als", 
  "alt", "ama", "ami", "amp", "amu", "ana", "and", "ane", "ani", "ann", 
  "ant", "any", "ape", "apo", "app", "apt", "arb", "arc", "ard", "are", 
  "arf", "ark", "arm", "ars", "art", "ary", "ash", "ask", "asp", "ass", 
  "ate", "att", "auf", "auk", "ava", "ave", "avo", "awa", "awe", "awl", 
  "awn", "axe", "aye", "ays", "ayu", "azo", "baa", "bac", "bad", "bag", 
  "bah", "bal", "bam", "ban", "bap", "bar", "bas", "bat", "bay", "bed", 
  "bee", "beg", "bel", "ben", "bes", "bet", "bey", "bez", "bib", "bid", 
  "big", "bin", "bio", "bis", "bit", "biz", "boa", "bob", "bod", "bog", 
  "boh", "bok", "bon", "boo", "bop", "bor", "bos", "bot", "bow", "box", 
  "boy", "bra", "bro", "brr", "bub", "bud", "bug", "bum", "bun", "bur", 
  "bus", "but", "buy", "bye", "bys", "cab", "cad", "caf", "cal", "cam", 
  "can", "cap", "car", "cat", "caw", "cay", "cee", "cel", "cep", "cha", 
  "che", "chi", "cid", "cig", "cis", "cit", "cly", "cob", "cod", "cog", 
  "col", "con", "coo", "cop", "cor", "cos", "cot", "cow", "cox", "coy", 
  "coz", "cru", "cry", "cub", "cud", "cue", "cum", "cup", "cur", "cut", 
  "cuz", "cwm", "dab", "dad", "dae", "dag", "dah", "dak", "dal", "dam", 
  "dan", "dap", "das", "daw", "day", "deb", "dee", "def", "dei", "del", 
  "den", "dep", "dev", "dew", "dex", "dey", "dib", "did", "die", "dif", 
  "dig", "dim", "din", "dip", "dis", "dit", "div", "dob", "doc", "dod", 
  "doe", "dog", "doh", "dol", "dom", "don", "doo", "dop", "dor", "dos", 
  "dot", "dow", "dry", "dso", "dub", "dud", "due", "dug", "duh", "dui", 
  "dum", "dun", "duo", "dup", "dux", "dye", "dzo", "ean", "ear", "eas", 
  "eat", "eau", "ebb", "ech", "eco", "ecu", "edh", "eds", "eek", "eel", 
  "een", "eew", "eff", "efs", "eft", "egg", "ego", "ehs", "eik", "eke", 
  "eld", "elf", "elk", "ell", "elm", "els", "elt", "eme", "emf", "emo", 
  "ems", "emu", "end", "ene", "eng", "ens", "eon", "era", "ere", "erf", 
  "erg", "erk", "ern", "err", "ers", "ess", "est", "eta", "eth", "euk", 
  "eve", "ewe", "ewk", "ewt", "eye", "fab", "fad", "fag", "fah", "fan", 
  "fap", "far", "fas", "fat", "faw", "fax", "fay", "fed", "fee", "feh", 
  "fem", "fen", "fer", "fes", "fet", "feu", "few", "fey", "fez", "fib", 
  "fid", "fie", "fig", "fil", "fin", "fir", "fit", "fix", "fiz", "flu", 
  "fly", "fob", "foe", "fog", "foh", "fon", "foo", "fop", "for", "fou", 
  "fox", "foy", "fra", "fro", "fry", "fub", "fud", "fug", "fum", "fun", 
  "fur", "gab", "gad", "gae", "gag", "gal", "gam", "gan", "gap", "gar", 
  "gas", "gat", "gau", "gay", "ged", "gee", "gel", "gem", "gen", "geo", 
  "get", "gey", "ghi", "gib", "gid", "gie", "gif", "gig", "gin", "gio", 
  "gip", "gis", "git", "gju", "gnu", "goa", "gob", "god", "goe", "gon", 
  "goo", "gor", "gos", "got", "gov", "gox", "goy", "grr", "gub", "gue", 
  "gul", "gum", "gun", "gup", "gur", "gus", "gut", "guv", "guy", "gym", 
  "gyp", "had", "hae", "hag", "hah", "haj", "ham", "han", "hao", "hap", 
  "has", "hat", "haw", "hay", "heh", "hem", "hen", "hep", "her", "hes", 
  "het", "hew", "hex", "hey", "hic", "hid", "hie", "him", "hin", "hip", 
  "his", "hit", "hmm", "hoa", "hob", "hoc", "hod", "hoe", "hog", "hoh", 
  "hoi", "hom", "hon", "hoo", "hop", "hos", "hot", "how", "hox", "hoy", 
  "hub", "hue", "hug", "huh", "hui", "hum", "hun", "hup", "hut", "hye", 
  "hyp", "ice", "ich", "ick", "icy", "ide", "ids", "iff", "ifs", "igg", 
  "ilk", "ill", "imp", "ink", "inn", "ins", "ion", "ios", "ire", "irk", 
  "ish", "ism", "iso", "ita", "its", "ivy", "jab", "jag", "jak", "jam", 
  "jap", "jar", "jaw", "jay", "jee", "jet", "jeu", "jew", "jib", "jig", 
  "jin", "jiz", "job", "joe", "jog", "jor", "jot", "jow", "joy", "jud", 
  "jug", "jun", "jus", "jut", "kab", "kae", "kaf", "kai", "kam", "kas", 
  "kat", "kaw", "kay", "kea", "keb", "ked", "kef", "keg", "ken", "kep", 
  "ket", "kex", "key", "khi", "kid", "kif", "kin", "kip", "kir", "kis", 
  "kit", "koa", "kob", "koi", "kon", "kop", "kor", "kos", "kow", "kue", 
  "kye", "kyu", "lab", "lac", "lad", "lag", "lah", "lam", "lap", "lar", 
  "las", "lat", "lav", "law", "lax", "lay", "lea", "led", "lee", "leg", 
  "lek", "lep", "les", "let", "leu", "lev", "lew", "lex", "ley", "lez", 
  "lib", "lid", "lie", "lig", "lin", "lip", "lis", "lit", "lob", "lod", 
  "log", "loo", "lop", "lor", "los", "lot", "low", "lox", "loy", "lud", 
  "lug", "lum", "lun", "lur", "luv", "lux", "luz", "lye", "lym", "maa", 
  "mac", "mad", "mae", "mag", "mak", "mal", "mam", "man", "map", "mar", 
  "mas", "mat", "maw", "max", "may", "med", "meg", "meh", "mel", "mem", 
  "men", "mes", "met", "meu", "mew", "mho", "mib", "mic", "mid", "mig", 
  "mil", "mim", "mir", "mis", "mix", "miz", "mmm", "mna", "moa", "mob", 
  "moc", "mod", "moe", "mog", "moi", "mol", "mom", "mon", "moo", "mop", 
  "mor", "mos", "mot", "mou", "mow", "moy", "moz", "mud", "mug", "mum", 
  "mun", "mus", "mut", "mux", "myc", "nab", "nae", "nag", "nah", "nam", 
  "nan", "nap", "nas", "nat", "nav", "naw", "nay", "neb", "ned", "nee", 
  "nef", "neg", "nek", "nep", "net", "new", "nib", "nid", "nie", "nil", 
  "nim", "nip", "nis", "nit", "nix", "nob", "nod", "nog", "noh", "nom", 
  "non", "noo", "nor", "nos", "not", "now", "nox", "noy", "nth", "nub", 
  "nug", "nun", "nur", "nus", "nut", "nye", "nys", "oaf", "oak", "oar", 
  "oat", "oba", "obe", "obi", "obo", "obs", "oca", "och", "oda", "odd", 
  "ode", "ods", "oes", "off", "oft", "ohm", "oho", "ohs", "oik", "oil", 
  "oka", "oke", "old", "ole", "olm", "oma", "oms", "one", "ono", "ons", 
  "oof", "ooh", "oom", "oon", "oop", "oor", "oos", "oot", "opa", "ope", 
  "ops", "opt", "ora", "orb", "orc", "ord", "ore", "orf", "org", "ors", 
  "ort", "ose", "oud", "ouk", "oup", "our", "out", "ova", "owe", "owl", 
  "own", "owt", "oxo", "oxy", "oye", "oys", "pac", "pad", "pah", "pak", 
  "pal", "pam", "pan", "pap", "par", "pas", "pat", "paw", "pax", "pay", 
  "pea", "pec", "ped", "pee", "peg", "peh", "pen", "pep", "per", "pes", 
  "pet", "pew", "phi", "pho", "phs", "pht", "pia", "pic", "pie", "pig", 
  "pin", "pip", "pir", "pis", "pit", "piu", "pix", "ply", "poa", "pod", 
  "poh", "poi", "pol", "pom", "poo", "pop", "pos", "pot", "pow", "pox", 
  "poz", "pre", "pro", "pry", "psi", "pst", "pub", "pud", "pug", "puh", 
  "pul", "pun", "pup", "pur", "pus", "put", "puy", "pya", "pye", "pyx", 
  "qat", "qis", "qua", "rad", "rag", "rah", "rai", "raj", "ram", "ran", 
  "rap", "ras", "rat", "raw", "rax", "ray", "reb", "rec", "red", "ree", 
  "ref", "reg", "reh", "rei", "rem", "ren", "rep", "res", "ret", "rev", 
  "rew", "rex", "rez", "rho", "rhy", "ria", "rib", "rid", "rif", "rig", 
  "rim", "rin", "rip", "rit", "riz", "rob", "roc", "rod", "roe", "rok", 
  "rom", "roo", "rot", "row", "rub", "ruc", "rud", "rue", "rug", "rum", 
  "run", "rut", "rya", "rye", "ryu", "sab", "sac", "sad", "sae", "sag", 
  "sai", "sal", "sam", "san", "sap", "sar", "sat", "sau", "saw", "sax", 
  "say", "saz", "sea", "sec", "sed", "see", "seg", "sei", "sel", "sen", 
  "ser", "set", "sev", "sew", "sex", "sey", "sez", "sha", "she", "shh", 
  "sho", "shy", "sib", "sic", "sig", "sim", "sin", "sip", "sir", "sis", 
  "sit", "six", "ska", "ski", "sky", "sly", "sma", "sny", "sob", "soc", 
  "sod", "sog", "soh", "sol", "som", "son", "sop", "sos", "sot", "sou", 
  "sov", "sow", "sox", "soy", "spa", "spy", "sri", "sty", "sub", "sud", 
  "sue", "sui", "suk", "sum", "sun", "sup", "suq", "sur", "sus", "swy", 
  "sye", "syn", "tab", "tad", "tae", "tag", "tai", "taj", "tak", "tam", 
  "tan", "tao", "tap", "tar", "tas", "tat", "tau", "tav", "taw", "tax", 
  "tay", "tea", "tec", "ted", "tee", "tef", "teg", "tel", "ten", "tes", 
  "tet", "tew", "the", "tho", "thy", "tic", "tid", "tie", "tig", "til", 
  "tin", "tip", "tis", "tit", "tix", "tiz", "toc", "tod", "toe", "tog", 
  "tom", "ton", "too", "top", "tor", "tot", "tow", "toy", "try", "tsk", 
  "tub", "tug", "tui", "tum", "tun", "tup", "tut", "tux", "twa", "two", 
  "twp", "tye", "tyg", "udo", "uds", "uey", "ufo", "ugh", "ugs", "uke", 
  "ule", "ulu", "umm", "ump", "ums", "uni", "uns", "upo", "ups", "urb", 
  "urd", "ure", "urn", "urp", "use", "uta", "ute", "uts", "utu", "uva", 
  "vac", "vae", "van", "var", "vas", "vat", "vau", "vav", "vaw", "vee", 
  "veg", "vet", "vex", "via", "vid", "vie", "vig", "vim", "vin", "vis", 
  "vly", "voe", "vog", "vol", "von", "vor", "vow", "vox", "vug", "vum", 
  "wab", "wad", "wae", "wag", "wan", "wap", "war", "was", "wat", "waw", 
  "wax", "way", "web", "wed", "wee", "wem", "wen", "wet", "wex", "wey", 
  "wha", "who", "why", "wig", "win", "wis", "wit", "wiz", "woe", "wog", 
  "wok", "won", "woo", "wop", "wos", "wot", "wow", "wox", "wry", "wud", 
  "wus", "wuz", "wye", "wyn", "xed", "xis", "yag", "yah", "yak", "yam", 
  "yap", "yar", "yas", "yaw", "yay", "yea", "yeh", "yen", "yep", "yer", 
  "yes", "yet", "yew", "yex", "yez", "ygo", "yid", "yin", "yip", "yob", 
  "yod", "yok", "yom", "yon", "yos", "you", "yow", "yug", "yuk", "yum", 
  "yup", "yus", "zag", "zap", "zas", "zax", "zea", "zed", "zee", "zek", 
  "zel", "zen", "zep", "zex", "zho", "zig", "zin", "zip", "zit", "ziz", 
  "zoa", "zoo", "zos", "zuz", "zzz"
]

Wins = 0;
const secrets = {
  secret_one: dictionary_usable[Math.floor(Math.random() * dictionary_usable.length)],
  secret_two: dictionary_usable[Math.floor(Math.random() * dictionary_usable.length)],
  secret_three: dictionary_usable[Math.floor(Math.random() * dictionary_usable.length)]
}

let state = {
  grid: Array(7).fill().map(() => Array(3).fill('')),
  currentRow: 0,
  currentCol: 0,
};

function resetState() {
  state.grid = Array(7).fill().map(() => Array(3).fill(''));
  state.currentRow = 0;
  state.currentCol = 0;
}

console.log(secrets.secret_one);
console.log(secrets.secret_two);
console.log(secrets.secret_three);



function drawBox(container, row, col, letter = '') {
  const box = document.createElement('div');
  box.className = 'box';
  box.id = `box${row}${col}`;
  box.innerHTML = letter;
  container.appendChild(box);
  return box;

}

function updateGrid() {
  for (let i = 0; i < state.grid.length; i++) {
    for (let j = 0; j < state.grid[i].length; j++) {
      const box = document.getElementById(`box${i}${j}`);
      box.innerHTML = state.grid[i][j];
    }
  }
}

function drawGrid(container) {
  const grid = document.createElement('div');

    grid.className = `grid`;

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 3; j++) {
          drawBox(grid, i, j);
        }
      }

    container.appendChild(grid);
  }



function resetNotify() {
  setTimeout(()=> {
    notifyPlayer('');
  }
  ,3000);
}

function notifyPlayer(sayWhat) {
  const notify = document.getElementById('notfiy');
  notify.innerHTML = sayWhat;
}


function registerKeyboardEvents() {
  document.body.onkeydown = (e) => {
    const key = e.key;
    if (key === 'Enter') {
      if (state.currentCol === 3) {
        const word = getCurrentWord();
        if (isWordValid(word)) {
          revealWord(word);
          state.currentRow++;
          state.currentCol = 0;
        } else {
          notifyPlayer('Not a valid word.');
          resetNotify()
        }
      }
    }
    else if (key === 'Backspace') {
      removeLetter();
    }
    if (isLetter(key)) {
      addLetter(key);
    }

    updateGrid()
  };
}

function getCurrentWord() {
  return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
}

function isWordValid(word) {

  return dictionary.includes(word);
}

function resetBoard() {
  board = document.getElementById('game');
  board.innerHTML = '';
  resetState();

  startup();
}

function revealWord(guess) {
  const row = state.currentRow;
  const animation_duration = 500;

  for (let i = 0; i < 3; i++) {
    const box = document.getElementById(`box${row}${i}`);
    const letter = box.innerHTML;

    setTimeout(() => {
      if (Wins === 0){
        if (letter === secrets.secret_one[i]) {
          box.classList.add('first');
        }else if (secrets.secret_one.includes(letter)) {
          box.classList.add('firstwrong');
        } else {
          box.classList.add('empty')
        }
      } else if (Wins === 1){
        if (letter === secrets.secret_two[i]) {
          box.classList.add('second');
        }else if (secrets.secret_two.includes(letter)) {
          box.classList.add('secondwrong');
        } else {
          box.classList.add('empty')
        }
      } else if (Wins === 2){
        if (letter === secrets.secret_three[i]) {
          box.classList.add('third');
        }else if (secrets.secret_three.includes(letter)) {
          box.classList.add('thirdwrong');
        } else {
          box.classList.add('empty')
        }
      }
    }), animation_duration;
    

    box.classList.add('animated');
    box.style.animationDelay = `${(i * animation_duration) / 2}ms`;

  }



  function oneOfTheGuesses(){
    if (secrets.secret_one === guess){
      return true;
    } else if (secrets.secret_two === guess){
      return true;
    } else if (secrets.secret_three === guess){
      return true;
    } else {
      return false;
    }
  }



  const isWinner = oneOfTheGuesses();
  const isGameOver = state.currentRow === 6;

  setTimeout(() => {
    if ((isWinner) && Wins < 3){
      Wins++;
      notifyPlayer('Nice you found one word, find all three to win.');
      if (secrets.secret_one === guess){
        var element = document.getElementById("first-mask");
        element.classList.add("found");
        resetBoard()
      } else if (secrets.secret_two === guess){
        var element = document.getElementById("second-mask");
        element.classList.add("found");
        resetBoard()
      } else if (secrets.secret_three === guess){
        var element = document.getElementById("third-mask");
        element.classList.add("found");
        resetBoard()
      }
      resetNotify()
      if (Wins === 3){
        playerHasWon();
      }
  } else if (isGameOver) {
    notifyPlayer(`You lost. the correct words were ${secrets.secret_one.toUpperCase()}, ${secrets.secret_two.toUpperCase()}, and ${secrets.secret_three.toUpperCase()}.`)
  }
  }, 3 * animation_duration);
}

function isLetter(key) {
  return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter) {
  if (state.currentCol === 3) return;
  state.grid[state.currentRow][state.currentCol] = letter;
  state.currentCol++;
}

function removeLetter() {
  if (state.currentCol == 0) return;
  state.grid[state.currentRow][state.currentCol - 1] = '';
  state.currentCol--;
}

function startup() {
  
  const game = document.getElementById(`game`);
  drawGrid(game);
  registerKeyboardEvents();
  resetState();
  removeActiveKeys();
}

function toggleButton(key) {
  var element = document.getElementById(`${key}`);
  element.classList.toggle('active-button');
}

alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function removeActiveKeys() {
  for (let i = 0; i < 26; i++) {
    key = alphabet[i];
    keyButton = document.getElementById(key);
    keyButton.classList.remove('active-button');
  }
}

function playerHasWon() {
  everything = document.getElementById('everything');
  everything.innerHTML = `
  <div class="template">
    <div></div>
    <div class="middle2">
      <div class="youwon">
        Wow... You actually won. Refresh page to play again.
      </div>
      <div>
        <img src="masks/love.png">
      </div>
      <div class="mask-grid">
      <img src="masks/secondmask.png" class="mask found" id="first-mask">
      <img src="masks/firstmask.png" class="mask found" id="second-mask">
      <img src="masks/thirdmask.png" class="mask found" id="third-mask">
      </div>
    </div>
    <div></div>
  </div>
  `;

}


startup();

