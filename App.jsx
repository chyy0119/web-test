import React, { useState } from 'react';

// 定义测试问题
const questions = [
  {
    id: 1,
    text: '当你有空闲时间时，你更倾向于：',
    options: [
      { text: '进行高强度的运动，如跑步、健身', points: { 瞬燃者: 3, 破浪者: 2, 恒温者: 0, 轻盈者: 0 } },
      { text: '进行低强度的运动，如瑜伽、散步', points: { 瞬燃者: 0, 破浪者: 0, 恒温者: 2, 轻盈者: 3 } },
      { text: '进行有规律的长期运动计划', points: { 瞬燃者: 0, 破浪者: 3, 恒温者: 2, 轻盈者: 0 } },
      { text: '根据心情随意选择运动方式', points: { 瞬燃者: 2, 破浪者: 0, 恒温者: 0, 轻盈者: 3 } }
    ]
  },
  {
    id: 2,
    text: '你如何看待运动中的挑战？',
    options: [
      { text: '喜欢挑战高难度动作，追求突破', points: { 瞬燃者: 3, 破浪者: 2, 恒温者: 0, 轻盈者: 0 } },
      { text: '享受循序渐进的过程，不急于求成', points: { 瞬燃者: 0, 破浪者: 1, 恒温者: 3, 轻盈者: 2 } },
      { text: '注重运动的持续性，而非强度', points: { 瞬燃者: 0, 破浪者: 2, 恒温者: 3, 轻盈者: 1 } },
      { text: '运动应该是轻松愉快的，避免过度挑战', points: { 瞬燃者: 0, 破浪者: 0, 恒温者: 1, 轻盈者: 3 } }
    ]
  },
  {
    id: 3,
    text: '你更喜欢哪种运动环境？',
    options: [
      { text: '户外，如公园、操场', points: { 瞬燃者: 2, 破浪者: 3, 恒温者: 2, 轻盈者: 1 } },
      { text: '室内，如健身房、瑜伽馆', points: { 瞬燃者: 3, 破浪者: 1, 恒温者: 2, 轻盈者: 2 } },
      { text: '自然环境，如森林、海滩', points: { 瞬燃者: 1, 破浪者: 2, 恒温者: 3, 轻盈者: 3 } },
      { text: '家中，方便随时运动', points: { 瞬燃者: 0, 破浪者: 0, 恒温者: 2, 轻盈者: 3 } }
    ]
  },
  {
    id: 4,
    text: '你运动的主要目的是：',
    options: [
      { text: '快速燃烧卡路里，保持身材', points: { 瞬燃者: 3, 破浪者: 2, 恒温者: 1, 轻盈者: 0 } },
      { text: '增强体质，提高健康水平', points: { 瞬燃者: 1, 破浪者: 3, 恒温者: 3, 轻盈者: 1 } },
      { text: '放松心情，缓解压力', points: { 瞬燃者: 0, 破浪者: 1, 恒温者: 2, 轻盈者: 3 } },
      { text: '挑战自我，突破极限', points: { 瞬燃者: 3, 破浪者: 3, 恒温者: 0, 轻盈者: 0 } }
    ]
  },
  {
    id: 5,
    text: '你如何安排运动时间？',
    options: [
      { text: '每天固定时间运动', points: { 瞬燃者: 1, 破浪者: 3, 恒温者: 3, 轻盈者: 0 } },
      { text: '有空就运动，没有固定时间', points: { 瞬燃者: 3, 破浪者: 0, 恒温者: 0, 轻盈者: 3 } },
      { text: '每周制定运动计划，严格执行', points: { 瞬燃者: 0, 破浪者: 3, 恒温者: 3, 轻盈者: 0 } },
      { text: '根据心情和状态决定是否运动', points: { 瞬燃者: 2, 破浪者: 0, 恒温者: 1, 轻盈者: 3 } }
    ]
  },
  {
    id: 6,
    text: '你更喜欢哪种运动类型？',
    options: [
      { text: '有氧运动，如跑步、游泳', points: { 瞬燃者: 3, 破浪者: 3, 恒温者: 2, 轻盈者: 0 } },
      { text: '力量训练，如举重、器械', points: { 瞬燃者: 3, 破浪者: 2, 恒温者: 1, 轻盈者: 0 } },
      { text: '柔韧性训练，如瑜伽、普拉提', points: { 瞬燃者: 0, 破浪者: 0, 恒温者: 2, 轻盈者: 3 } },
      { text: '休闲运动，如散步、太极', points: { 瞬燃者: 0, 破浪者: 0, 恒温者: 3, 轻盈者: 3 } }
    ]
  },
  {
    id: 7,
    text: '你如何看待运动中的竞争？',
    options: [
      { text: '喜欢竞争，追求胜利', points: { 瞬燃者: 3, 破浪者: 3, 恒温者: 0, 轻盈者: 0 } },
      { text: '注重参与，享受过程', points: { 瞬燃者: 1, 破浪者: 2, 恒温者: 3, 轻盈者: 3 } },
      { text: '与自己竞争，不断进步', points: { 瞬燃者: 2, 破浪者: 3, 恒温者: 3, 轻盈者: 0 } },
      { text: '避免竞争，运动只是为了放松', points: { 瞬燃者: 0, 破浪者: 0, 恒温者: 1, 轻盈者: 3 } }
    ]
  },
  {
    id: 8,
    text: '你运动时的节奏是：',
    options: [
      { text: '快速、高强度', points: { 瞬燃者: 3, 破浪者: 2, 恒温者: 0, 轻盈者: 0 } },
      { text: '中速、稳定', points: { 瞬燃者: 0, 破浪者: 3, 恒温者: 3, 轻盈者: 0 } },
      { text: '慢速、放松', points: { 瞬燃者: 0, 破浪者: 0, 恒温者: 2, 轻盈者: 3 } },
      { text: '根据身体状况调整节奏', points: { 瞬燃者: 1, 破浪者: 1, 恒温者: 3, 轻盈者: 2 } }
    ]
  },
  {
    id: 9,
    text: '你更倾向于哪种运动伙伴？',
    options: [
      { text: '专业教练，指导我提高', points: { 瞬燃者: 3, 破浪者: 3, 恒温者: 2, 轻盈者: 0 } },
      { text: '朋友或家人，一起运动更有趣', points: { 瞬燃者: 2, 破浪者: 2, 恒温者: 2, 轻盈者: 3 } },
      { text: '独自运动，享受独处时光', points: { 瞬燃者: 0, 破浪者: 1, 恒温者: 3, 轻盈者: 3 } },
      { text: '运动社群，有共同目标', points: { 瞬燃者: 2, 破浪者: 3, 恒温者: 2, 轻盈者: 1 } }
    ]
  },
  {
    id: 10,
    text: '你如何评价一次运动的成功？',
    options: [
      { text: '达到了预定的运动目标', points: { 瞬燃者: 3, 破浪者: 3, 恒温者: 3, 轻盈者: 0 } },
      { text: '感觉轻松愉快，没有压力', points: { 瞬燃者: 0, 破浪者: 0, 恒温者: 1, 轻盈者: 3 } },
      { text: '坚持完成了运动计划', points: { 瞬燃者: 1, 破浪者: 3, 恒温者: 3, 轻盈者: 0 } },
      { text: '身体感觉舒适，没有疲劳', points: { 瞬燃者: 0, 破浪者: 1, 恒温者: 2, 轻盈者: 3 } }
    ]
  }
];

// 运动推荐数据
const sportRecommendations = {
  瞬燃者: [
    '高强度间歇训练 (HIIT)',
    '短跑',
    '篮球、足球等团队竞技运动',
    '拳击、跆拳道等对抗性运动',
    '攀岩等挑战性运动'
  ],
  破浪者: [
    '马拉松、长距离跑步',
    '骑行',
    '游泳',
    '户外徒步、登山',
    '铁人三项'
  ],
  恒温者: [
    '瑜伽',
    '太极',
    '散步、健走',
    '普拉提',
    '气功'
  ],
  轻盈者: [
    '瑜伽',
    '普拉提',
    '散步、健走',
    '舞蹈',
    '冥想'
  ]
};

// 人格特质描述
const personalityTraits = {
  瞬燃者: {
    核心特质: '触觉驱动，行动强力，偏爱短期高效运动，注重即时反馈与兴奋态，乐于快速参与各类运动',
    核心需求: '瞬间调性、特权拉开，瞬时公益反馈、短期运动成就感'
  },
  破浪者: {
    核心特质: '自律性强，坚持长期高强度运动，承受力标杆，追求极致体验，乐于带动身边人参与运动与公益',
    核心需求: '户外长效防护、深层修护，长期公益参与、带动他人的工具'
  },
  恒温者: {
    核心特质: '性格内敛，偏爱低强度慢速运动，坚守自我节奏，注重长期坚持，追求从容且宜人的生活状态',
    核心需求: '舒缓修护、从容愉悦，细水长流的公益参与、自我认可'
  },
  轻盈者: {
    核心特质: '注重个人生活，偏爱轻松随性的低强度运动，参与意愿强但不压力，追求便捷感及美的体验',
    核心需求: '便捷美肤、低门槛参与，轻松变美、无压力公益体验'
  }
};

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({});
  const [mainPersonality, setMainPersonality] = useState('');

  // 处理选项选择
  const handleOptionSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);
  };

  // 计算结果
  const calculateResults = () => {
    const scores = {
      瞬燃者: 0,
      破浪者: 0,
      恒温者: 0,
      轻盈者: 0
    };

    answers.forEach(answer => {
      Object.entries(answer.points).forEach(([personality, point]) => {
        scores[personality] += point;
      });
    });

    setResults(scores);

    // 确定主要运动人格
    let maxScore = 0;
    let mainPersonality = '';
    Object.entries(scores).forEach(([personality, score]) => {
      if (score > maxScore) {
        maxScore = score;
        mainPersonality = personality;
      }
    });

    setMainPersonality(mainPersonality);
    setShowResults(true);
  };

  // 下一题
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  // 上一题
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // 重新测试
  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setResults({});
    setMainPersonality('');
  };

  return (
    <div className="container">
      <h1>M-SPORT 运动人格测试</h1>

      {!showResults ? (
        <div>
          <div className="question">
            <p>问题 {currentQuestion + 1}/{questions.length}</p>
            <p>{questions[currentQuestion].text}</p>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${answers[currentQuestion] === option ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.text}
                </div>
              ))}
            </div>
          </div>

          <div className="button-container">
            <button 
              className="button"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              上一题
            </button>
            <button 
              className="button"
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
            >
              {currentQuestion === questions.length - 1 ? '提交' : '下一题'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h2>测试结果</h2>
          <p>你的主要运动人格：{mainPersonality}</p>
          
          <div className={`pixel-character ${mainPersonality}`}>
            <div className="pixel-person">
              {mainPersonality === '瞬燃者' && (
                <>
                  <div className="fire"></div>
                </>
              )}
              {mainPersonality === '破浪者' && (
                <>
                  <div className="swim-cap"></div>
                  <div className="water"></div>
                </>
              )}
              {mainPersonality === '恒温者' && (
                <div className="tai-chi-symbol"></div>
              )}
              {mainPersonality === '轻盈者' && (
                <>
                  <span className="sparkle">✦</span>
                  <span className="sparkle">✦</span>
                  <span className="sparkle">✦</span>
                  <div className="yoga-mat"></div>
                </>
              )}
              <div className="head">
                <div className="eye-left"></div>
                <div className="eye-right"></div>
                <div className="mouth"></div>
              </div>
              <div className="body"></div>
              <div className="arm-left">
                {mainPersonality === '瞬燃者' && <div className="glove-left"></div>}
              </div>
              <div className="arm-right">
                {mainPersonality === '瞬燃者' && <div className="glove-right"></div>}
              </div>
              <div className="leg-left"></div>
              <div className="leg-right"></div>
            </div>
          </div>
          
          <div className="personality-info">
            <h3>{mainPersonality} 特质</h3>
            <p><strong>核心特质：</strong>{personalityTraits[mainPersonality].核心特质}</p>
            <p><strong>核心需求：</strong>{personalityTraits[mainPersonality].核心需求}</p>
          </div>

          <div className="sport-recommendations">
            <h3>推荐运动</h3>
            <ul>
              {sportRecommendations[mainPersonality].map((sport, index) => (
                <li key={index}>{sport}</li>
              ))}
            </ul>
          </div>

          <button className="button" onClick={handleRestart}>
            重新测试
          </button>
        </div>
      )}
    </div>
  );
}

export default App;