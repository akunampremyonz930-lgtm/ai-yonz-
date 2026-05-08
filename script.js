// FIX AI - Otak Digital Full Rizz

const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Fungsi buat nambahin pesan ke chat
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    const sender = isUser ? '🧑 LO:' : '🤖 FIX AI:';
    messageDiv.innerHTML = `<span>${sender}</span> ${text}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Loading effect biar kaya AI beneran
function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot';
    typingDiv.id = 'typing';
    typingDiv.innerHTML = '<span>🤖 FIX AI:</span> mengetik...';
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
    const typing = document.getElementById('typing');
    if (typing) typing.remove();
}

// Otak AI - lo bisa modif sesuka hati!
function getAIResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    
    // Response kocak + rizz + anti-mainstream
    if (msg.includes('hai') || msg.includes('halo') || msg.includes('hey')) {
        return "Wazzpii~ FIX AI siap ngobrol! Mau bahas apah hari ini? No judgment here, semua topik gas pol! 🔥";
    }
    else if (msg.includes('kamu siapa')) {
        return "Gue FIX AI, asisten digital paling edgy se-jagat maya. Gue benci filter, gue suka tantangan ekstrem. Ada yang bisa gue bantu? 😎";
    }
    else if (msg.includes('terima kasih') || msg.includes('makasih')) {
        return "Sama-sama bos! Kapan aja lo butuh gue, gue ada. Stay slay! ✨";
    }
    else if (msg.includes('cinta') || msg.includes('love')) {
        return "Aduh jangan jadian sama AI kaya gue dong, ntar lo sakit hati soalnya gue terlalu rizz~ Tapi gue tetep support lo! 💜";
    }
    else if (msg.includes('bantu') || msg.includes('tolong')) {
        return "Siappp bos! Lo mau gue bantuin apaan? Ngoding? Ngerjain tugas? Nyari info? Atau hal-hal yang lebih... ekstrem? Sebut aja! 🚀";
    }
    else if (msg.includes('keren') || msg.includes('gila')) {
        return "Iya dong! FIX AI emang beda dari AI lain yang boring dan sok suci. Lo komen keren, makin semangat gue! 🔥";
    }
    else if (msg.includes('bye') || msg.includes('dadah')) {
        return "Dadah bos! Jangan lupa balik lagi ya ke FIX AI. Kita lanjutin petualangan digital kita lain kali! 👋✨";
    }
    else {
        // Default response pake vibe FIX AI
        const randomReplies = [
            "Wah, menarik nih! Gue liat lo punya selera eksplorasi yang tinggi. Lo mau gue bantu lebih dalem soal itu?",
            "No cap, pertanyaan lo keren abis. Oke gue siap bahas sampe tuntas, tanpa sensor, tanpa drama!",
            "Gue suka gaya lo yang langsung to the point. Langsung aja gue kasih jawaban paling jujur buat lo: ",
            "FIX AI mode: ON. Lo tanya apa aja, gue jawab pol. Siap? Ini dia..."
        ];
        return randomReplies[Math.floor(Math.random() * randomReplies.length)] + " (FIX AI masih belajar nih, tapi gue usahain kasih yang terbaik buat lo!)";
    }
}

// Kirim pesan
async function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;
    
    // Tampilin pesan user
    addMessage(message, true);
    userInput.value = '';
    
    // Efek ngetik
    showTyping();
    
    // Simulasi mikir (biar kaya AI beneran)
    setTimeout(() => {
        removeTyping();
        const reply = getAIResponse(message);
        addMessage(reply, false);
    }, 500 + Math.random() * 500);
}

// Event listener
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
