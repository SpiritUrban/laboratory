const log = console.log;

const pause = async (time) =>
  new Promise((res, rej) => {
    setTimeout(res, time);
  });

function playSound(path, volume = 1) {
  let audio = new Audio(path);
  audio.volume = volume;
  audio
    .play()
    .then(() => {
      console.log("Audio played successfully");
    })
    .catch((error) => {
      console.error("Audio play failed:", error);
      // Здесь можно добавить логику восстановления или информировать пользователя
    });
}

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  // Здесь вы можете настроить параметры, такие как скорость, высота и т. д.
  // Например:
  utterance.rate = 0.8; // скорость озвучивания (1 - нормальная скорость)
  // utterance.pitch = 1; // высота звука (1 - нормальная высота)
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function speakText2(text, clb) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.onend = function (event) {
    console.log("Озвучивание закончилось");
    clb();
  };
  // Здесь вы можете настроить параметры, такие как скорость, высота и т. д.
  // Например:
  utterance.rate = 0.8; // скорость озвучивания (1 - нормальная скорость)
  // utterance.pitch = 1; // высота звука (1 - нормальная высота)
  var voices = window.speechSynthesis.getVoices();

  // Google UK English Female (en-GB) [remote]
  //   utterance.voice = voices.filter(function (voice) {
  //     return voice.name == "Google UK English Female";
  //   })[0];

  var englishVoices = speechSynthesis.getVoices().filter(function (voice) {
    return voice.lang.indexOf("en") === 0; // фильтруем голоса, язык которых начинается на 'en'
  });

  //   console.log("Available English voices:");
  englishVoices.forEach(function (voice, index) {
    // console.log(
    //   index +
    //     1 +
    //     ": " +
    //     voice.name +
    //     " (" +
    //     voice.lang +
    //     ") [" +
    //     (voice.localService ? "local" : "remote") +
    //     "]"
    // );
  });

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

const scrollDown = () => window.scrollTo(0, document.body.scrollHeight);
