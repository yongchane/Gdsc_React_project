import React, { useState } from "react";

const Tts = () => {
  const [voice, setVoice] = useState("");
  const synth = window.speechSynthesis;
//  해당 객체를 사용하여 텍스트를 음성으로 변환하고,음성을 재생하거나 중지할 수 있음
  
  const onChangeVoice = (e) => setVoice(e.target.value);
//  입력 요소의 값이 변경되면 이벤트가 발생하고, 해당 이벤트를 처리하는 함수인 onChangeVoice가 호출되어 voice 변수의 값을 업데이트
  const onClick = () => {
    if (synth && synth.speaking) {
      synth.cancel();
    }
    // 이미 실행 중인 음성이 있는 경우 synth.cancel()을 호출하여 음성 출력을 중지
    if (voice !== "") {
      const utterance = new SpeechSynthesisUtterance(voice);
      utterance.lang = "ko-KR";
      // 한국어로 언어 설정
      synth.speak(utterance);
      // 음성 출력
    }
  };

  return (
    <div>
      <input placeholder="텍스트를 입력하세요" value={voice} onChange={onChangeVoice} />
      <button onClick={onClick}>음성 출력</button>
    </div>
  );
};

export default Tts;
