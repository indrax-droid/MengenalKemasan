function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ayq2j3emKb":
        Script1();
        break;
      case "611RL9Mv2EH":
        Script2();
        break;
      case "5pdLFHliq1Z":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";

audio.load();

audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');

audio.src="musik.mp3";

audio.load();

audio.play();
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";

audio.load();

audio.pause();
}

