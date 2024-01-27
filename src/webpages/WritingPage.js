import React, { useState, useEffect, useCallback } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import TextInput from '../components/TextInput';
import TimerSection from '../components/TimerSection';
import TypingArea from '../components/TypingArea';
import ResultModal from '../components/ResultModal';

const WritingPage = () => {
  const [textInput, setTextInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [myWord, setMyWord] = useState("");
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [characters, setCharacters] = useState(0);

  const generateRandomText = useCallback(() => {
    const words = [
         "Game", "is", "my", "sit", "Name", "constructor",
         "adipiscing", "chocolate", "sed", "do", "termper", "bestfriend",
         "Fight", "in", "manufacture", "eneyearfeast", "money", "magna",
         "aliqua","abandon", "ability", "absence", "academy", "account", 
         "accuse", "achieve", "acquire", "address", "adjust", "advance", 
         "advice", "affect", "agreement", "airline", "alcohol", "allege", 
         "amazing", "analysis", "announce", "apology", "appetite", "approval", 
         "arbitrary", "architecture", "argument", "arise", "arrange", "asylum",
          "athlete", "atmosphere", "auction", "authentic", "average", "awesome", 
          "background", "bargain", "beautiful", "benefit", "blame", "boundary", 
          "bravery", "briefing", "calculate", "campaign", "capability", "captivate",
          "category", "celebrate", "challenge", "character", "charity", "chemical", 
          "choice", "circumstance", "citizenship", "civilization", "classic", "coincidence",
          "collaborate", "collective", "command", "communication", "community", "compassion", 
          "competition", "complaint", "comprehensive", "concern", "consequence", "conservative",
          "consideration", "consistent", "contribute", "conviction", "cooperate", "corporate", 
          "courage", "creative", "criminal", "criticism", "cultural", "dangerous", "decision", 
          "declaration", "decrease", "dedicate", "defend", "definition", "delegate", "deliberate",
          "delivery", "demonstrate", "departure", "dependent", "describe", "design", "destructive",
          "determine", "development", "difference", "dignity", "diplomacy", "direction", "disagree",
          "disappear", "discipline", "discovery", "discrimination", "dispute", "display", "diversity",
          "domestic", "dominate", "earnest", "economy", "education", "efficiency", "electronic", "elementary", 
          "elegant", "embark", "emergency", "empower", "encounter", "endurance", "enforce", "enlighten", "enterprise",
          "entertain", "enthusiasm", "environment", "equation", "essential", "establish", "evaluate", "evidence", 
          "exaggerate", "examine", "exceed", "excellent", "exchange", "exclusive", "execute", "exhibit", "existence",
          "experience", "experiment", "expertise", "explanation", "explore", "express", "extraordinary", "facilitate",
          "familiar", "fantastic", "fascinate", "feasible", "federation", "financial", "flexibility", "fluctuate",
          "frequently", "fundamental", "generate", "generosity", "genuine", "gigantic", "government", "grateful", 
          "guarantee", "guidance", "harassment", "heritage", "homogeneous", "honesty", "horizon", "hospitality",
          "ignorance", "illuminate", "illusion", "illustrate", "imagination", "immigrate", "impartial", "implement",
          "important", "impressive", "incentive", "incident", "inclusive", "independence", "indicate", "individual",
          "industry", "inevitable", "infrastructure", "initiative", "innovation", "inquiry", "inspiration", 
          "integrate", "integrity", "intelligence", "intense", "interact", "international", "intervene", "intolerance",
          "investigate", "invisible", "isolate", "jeopardize", "judgment", "justice", "knowledge", "landscape", "leisure",
          "liberate", "literature", "logical", "loyalty", "magnitude", "mandatory", "manipulate", "manufacture", "marginal", 
          "marvelous", "mechanism", "mediate", "melancholy", "memorable", "meticulous", "minimal", "misunderstand", "mobility",
          "modify", "momentum", "monetary", "multicultural", "mysterious", "navigate", "negotiate", "nominate", "nostalgia",
          "notorious", "obedience", "objective", "obstacle", "occasion", "occurrence", "ominous", "opportunity", "optimistic",
          "orchestrate", "organization", "outstanding", "overcome", "oversee", "parallel", "participate", "passionate", "patience",
          "perceive", "perfection", "performance", "perilous", "permanent", "perpetuate", "perspective", "persistence",
          "phenomenon", "philanthropy", "pleasure", "poignant", "policy", "politics", "ponder", "positive", "possibility",
          "practical", "precise", "prejudice", "premise", "preserve", "pretend", "prevent", "primary", "prioritize", "proclaim",
          "productive", "proficient", "profound", "progressive", "prohibit", "prominent", "prosperity", "protest", "proud", 
          "provide", "purpose", "qualify"
    ];

    const randomText = Array.from({ length: 250 }, () => words[Math.floor(Math.random() * words.length)]);
    return randomText.join(" ");
  }, []); 

  useEffect(() => {
    if (isStarted) {
      setMyWord(generateRandomText());
      setIncorrectCount(0);
      setCharacters(0);
    }
  }, [isStarted, generateRandomText]);

  const handleInputChange = (value) => {
    if (isStarted) {
      setTextInput(value);
  
      let count = 0;
      let count1 = 0;
      const minLength = Math.min(myWord.length, value.length);
  
      for (let i = 0; i < minLength; i++) {
        if (myWord[i] !== value[i] && myWord[i] !== ' ' && value[i] !== ' ') {
          count++; // Incorrect character
        } else {
          if (myWord[i] === ' ') {
            count1++; // Space
          } else if (myWord[i] === value[i]) {
            count1++; // Correct character
          }
        }
      }
  
      setCharacters(count1);
      setIncorrectCount(count);
    }
  };
  const handleTimerComplete = (value) => {
    if (value === 0) {
      setIsModalOpen(true);
      setIsStarted(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <div>
      <TypingArea myWord={myWord} textInput={textInput} />
      <TextInput isStarted={isStarted} textInput={textInput} onInputChange={handleInputChange} />
      <TimerSection
        isStarted={isStarted}
        onTimerComplete={handleTimerComplete}
        characters={characters}
        incorrectCount={incorrectCount}
        onHandleStart={handleStart}
      />
      <ResultModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        characters={characters}
        incorrectCount={incorrectCount}
        
      />
    </div>
  );
};

export default WritingPage;