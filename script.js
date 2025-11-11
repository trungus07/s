const homeScreen = document.getElementById("home");
const quizScreen = document.getElementById("quiz");
const resultScreen = document.getElementById("result");
const startBtn = document.getElementById("startBtn");
const questionText = document.getElementById("questionText");
const answersContainer = document.querySelector(".answers");
const fillQuestion = document.getElementById("fillQuestion");

let currentQuestion = 0;

// Danh sách câu hỏi
const questions = [
  {
    type: "choice",
    question: "Khi lực lượng sản xuất phát triển, nó tất yếu sẽ đòi hỏi quan hệ sản xuất phải thay đổi để phù hợp. Nếu quan hệ sản xuất không thay đổi, điều gì sẽ xảy ra?",
    options: [
      "A. Quan hệ sản xuất sẽ kìm hãm sự phát triển của lực lượng sản xuất",
      "B. Quan hệ sản xuất sẽ thúc đẩy sự phát triển của lực lượng sản xuất",
      "C. Quan hệ sản xuất sẽ không còn tác động đến lực lượng sản xuất",
      "D. Quan hệ sản xuất sẽ tự động thay đổi"
    ],
    answer: 0
  },
  {
    type: "choice",
    question: "Yếu tố nào sau đây là không thuộc về quan hệ sản xuất?",
    options: [
      "A. Quan hệ sở hữu về tư liệu sản xuất",
      "B. Quan hệ trong tổ chức và quản lý sản xuất",
      "C. Công cụ lao động",
      "D. Quan hệ trong phân phối sản phẩm"
    ],
    answer: 2
  },
  {
    type: "fill",
    question: "“Quy luật về sự phù hợp của quan hệ sản xuất với trình độ và tính chất của lực lượng sản xuất là quy luật ______ của sự phát triển xã hội”",
    answer: "chung nhất"
  },
  {
    type: "fill",
    question: "Lực lượng sản xuất quyết định ______.",
    answer: "quan hệ sản xuất"
  },
 {
    type: "choice",
    question: "Mối quan hệ biện chứng giữa lực lượng sản xuất và quan hệ sản xuất là gì?",
    options: [
      "A. Quan hệ sản xuất quyết định hoàn toàn lực lượng sản xuất.",
      "B. Lực lượng sản xuất quyết định quan hệ sản xuất, còn quan hệ sản xuất tác động trở lại đối với lực lượng sản xuất.",
      "C. Chúng không có mối quan hệ biện chứng nào.",
      "D. Quan hệ sản xuất luôn phù hợp và không thay đổi"
    ],
    answer: 1
  },
{
    type: "choice",
    question: "Ý nghĩa phương pháp luận của quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất là gì?",
    options: [
       "A. Chỉ cần phát triển tư liệu sản xuất mà không cần chú ý đến con người.",
      "B. Trong thực tiễn, muốn phát triển kinh tế phải bắt đầu từ phát triển lực lượng sản xuất, trước hết là phát triển lực lượng lao động và công cụ lao động.",
      "C. Không cần thúc đẩy các thành phần kinh tế.",
      "D. Bỏ qua vai trò của công cụ lao động."
    ],
    answer: 1
  },
{
    type: "choice",
    question: "Khi Quan hệ sản xuất phù hợp với trình độ phát triển của Lực lượng sản xuất, điều nào sau đây là đúng?",
    options: [
       "A. Quan hệ sản xuất sẽ kìm hãm lực lượng sản xuất phát triển",
      "B. Quan hệ sản xuất trở thành “xiềng xích” của lực lượng sản xuất",
      "C. Quan hệ sản xuất trở thành động lực thúc đẩy lực lượng sản xuất phát triển",
      "D. Quan hệ sản xuất không còn ảnh hưởng đến lực lượng sản xuất"
    ],
    answer: 2
  },
{
    type: "choice",
    question: "Theo nội dung, sự tác động trở lại của quan hệ sản xuất đối với lực lượng sản xuất diễn ra theo số chiều hướng nào?",
    options: [
      "A. Chỉ một chiều: thúc đẩy",
      "B. Hai chiều: thúc đẩy và kìm hãm",
      "C. Chỉ một chiều: kìm hãm",
      "D. Ba chiều: thúc đẩy, kìm hãm và trung lập"
    ],
    answer: 1
  },
 {
    type: "fill",
    question: "Quy luật phổ biến của toàn bộ tiến trình lịch sử là: quan hệ sản xuất phải ___ với trình độ phát triển của lực lượng sản xuất.",
    answer: "phù hợp"
  },
{
    type: "choice",
    question: "Vai trò quyết định của Lực lượng sản xuất đối với Quan hệ sản xuất được thể hiện rõ nhất qua nội dung nào sau đây?",
    options: [
      "A. Quan hệ sản xuất kìm hãm sự phát triển của Lực lượng sản xuất khi không còn phù hợp.",
      "B. Lực lượng sản xuất thay đổi kéo theo sự thay đổi của Quan hệ sản xuất (Quy luật sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất).",
      "C. Quan hệ sản xuất là hình thức phát triển và tạo điều kiện cho Lực lượng sản xuất phát triển.",
      "D. Lực lượng sản xuất là nền tảng để xây dựng chính sách phù hợp với thực tế phát triển kinh tế."
    ],
    answer: 1
  },
{
    type: "choice",
    question: "Sự tác động trở lại của Quan hệ sản xuất đối với Lực lượng sản xuất theo hướng tiêu cực/kìm hãm diễn ra khi nào?",
    options: [
      "A. Quan hệ sản xuất tạo 'địa bàn' cho lực lượng sản xuất phát triển.",
      "B. Quan hệ sản xuất phù hợp với trình độ phát triển của Lực lượng sản xuất.",
      "C. Quan hệ sản xuất không phù hợp - kìm hãm, thậm chí phá hoại Lực lượng sản xuất.",
      "D. Quan hệ sản xuất tạo động lực thúc đẩy phát triển Lực lượng sản xuất."
    ],
    answer: 2
  },

 {
    type: "fill",
    question: "Lực lượng sản xuất là nội dung của quá trình sản xuất, mang tính chất ________________.",
    answer: "thúc đẩy đổi mới"
  },
{
    type: "choice",
    question: "Quy luật nào có ý nghĩa phương pháp luận quan trọng trong phát triển kinh tế xã hội?",
    options: [
       "A. Quy luật cung cầu",
      "B. Quy luật giá trị",
      "C. Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất",
      "D. Quy luật cạnh tranh"
    ],
    answer: 2
  },
{
    type: "choice",
    question: "Mô hình kinh tế nào thể hiện sự vận dụng quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất ở Việt Nam hiện nay?",
    options: [
       "A. Kinh tế thị trường tự do",
      "B. Kinh tế kế hoạch hóa tập trung",
      "C. Kinh tế thị trường định hướng xã hội chủ nghĩa",
      "D. Kinh tế hỗn hợp"
    ],
    answer: 2
  },
 {
    type: "fill",
    question: "Muốn xóa bỏ một quan hệ sản xuất cũ, thiết lập một quan hệ sản xuất mới phải căn cứ vào ________ của lực lượng sản xuất.",
    answer: "trình độ phát triển"
  },
  // ... thêm các câu khác
];

// Bắt đầu trò chơi
startBtn.addEventListener("click", () => {
  homeScreen.classList.remove("active");
  quizScreen.classList.add("active");
  currentQuestion = 0;
  loadQuestion();
});

// Hàm tải câu hỏi
function loadQuestion() {
  const q = questions[currentQuestion];
  answersContainer.innerHTML = "";
  fillQuestion.innerHTML = "";
  questionText.textContent = "";

  if (q.type === "choice") {
    questionText.textContent = q.question;

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.addEventListener("click", () => handleChoice(btn, i === q.answer));
      answersContainer.appendChild(btn);
    });
  } else if (q.type === "fill") {
    questionText.textContent = q.question;

    const inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.placeholder = "Nhập đáp án của bạn...";
    inputBox.classList.add("fill-input");

    const checkBtn = document.createElement("button");
    checkBtn.textContent = "Kiểm tra";
    checkBtn.classList.add("btn");
    checkBtn.addEventListener("click", () => checkFillAnswer(q.answer, inputBox));

    fillQuestion.appendChild(inputBox);
    fillQuestion.appendChild(checkBtn);
  }
}

// Xử lý câu hỏi trắc nghiệm
function handleChoice(button, isCorrect) {
  if (isCorrect) {
    button.classList.add("correct");

    // ✅ chỉ tạo nút Tiếp theo khi đúng
    createNextButton();
  } else {
    button.classList.add("wrong");
    setTimeout(() => button.classList.remove("wrong"), 600);
  }
}

// Xử lý câu hỏi điền khuyết
function checkFillAnswer(correctAnswer, inputBox) {
  const userAnswer = inputBox.value.trim().toLowerCase();
  const correct = correctAnswer.trim().toLowerCase();

  if (userAnswer === "") {
    inputBox.placeholder = "Hãy nhập đáp án!";
    return;
  }

  if (userAnswer === correct) {
    inputBox.classList.add("correct");
    createNextButton(); // ✅ chỉ hiện nút Tiếp theo khi đúng
  } else {
    inputBox.classList.add("wrong");
    setTimeout(() => inputBox.classList.remove("wrong"), 800);
  }
}

// Tạo nút Tiếp theo (chỉ khi đúng)
function createNextButton() {
  // Xóa nút cũ (nếu có)
  const oldBtn = document.getElementById("nextBtn");
  if (oldBtn) oldBtn.remove();

  const nextBtn = document.createElement("button");
  nextBtn.id = "nextBtn";
  nextBtn.textContent = "Tiếp theo ➜";
  nextBtn.classList.add("btn");
  nextBtn.addEventListener("click", nextQuestion);
  quizScreen.appendChild(nextBtn);
}

// Chuyển sang câu kế tiếp
function nextQuestion() {
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) nextBtn.remove();

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Màn hình kết thúc
function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  resultScreen.innerHTML = `
    <h1 class="end-title">THE END</h1>
    <button id="restartBtn" class="btn">Chơi lại</button>
  `;
  document.getElementById("restartBtn").addEventListener("click", () => {
    resultScreen.classList.remove("active");
    homeScreen.classList.add("active");
  });
}
