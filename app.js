// 1. የስራ ሰዓት ሁኔታን ማረጋገጫ (Check Shop Open/Closed Status)
function checkShopStatus() {
    const statusElement = document.getElementById('shop-status');
    if (!statusElement) return;

    const now = new Date();
    const currentHour = now.getHours(); // ከ 0 - 23 ሰዓት

    // ከጠዋቱ 2:00 (8 AM) እስከ ማታ 2:00 (8 PM / 20:00) ክፍት ነው
    if (currentHour >= 8 && currentHour < 20) {
        statusElement.innerHTML = `<span class="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold">● አሁን ክፍት ነን</span>`;
    } else {
        statusElement.innerHTML = `<span class="bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-xs font-semibold">○ አሁን ዝግ ነን (ነገ ጠዋት 2:00 እንከፍታለን)</span>`;
    }
}

// 2. የግምታዊ ዋጋ ማስያ (Simple Repair Cost Calculator)
function calculateCost() {
    const serviceSelect = document.getElementById('service-type');
    const resultElement = document.getElementById('estimated-cost');
    
    if (!serviceSelect || !resultElement) return;

    const selectedPrice = serviceSelect.value;
    
    if (selectedPrice === "0") {
        resultElement.innerText = "እባክዎን የአገልግሎት አይነት ይምረጡ";
        resultElement.className = "text-gray-400 text-sm mt-2";
    } else {
        resultElement.innerText = `ግምታዊ ዋጋ፦ ${selectedPrice} ብር`;
        resultElement.className = "text-emerald-400 font-bold text-lg mt-2";
    }
}

// ገጹ ተከፍቶ ሲያልቅ ስክሪፕቶቹን ማስነሳት
document.addEventListener('DOMContentLoaded', () => {
    checkShopStatus();
});
