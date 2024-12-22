// 生成哈希值的简单函数 (这里使用字符串的字符编码和简单的累加方式来模拟哈希，复杂哈希如SHA-256可以使用外部库)
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // 强制转换为32位整数
    }
    return hash;
}

// 加密函数
function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let key = document.getElementById('key').value;
    let hash = simpleHash(key);
    
    // 1. 替换字符
    let encrypted = '';
    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        // 2. 动态位移
        let shift = (charCode + (hash & 0xFF)) % 256; // 仅用hash的低8位进行位移
        encrypted += String.fromCharCode(shift);
    }
    
    // 3. 字符混淆：简单交换
    encrypted = swapCharacters(encrypted);

    // 4. 加噪音：在字符串中随机插入字符
    encrypted = injectNoise(encrypted);

    // 将加密后的结果显示
    document.getElementById('outputText').value = encrypted;
}

// 解密函数
function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let key = document.getElementById('key').value;
    let hash = simpleHash(key);
    
    // 1. 去噪音：移除噪音字符
    inputText = removeNoise(inputText);

    // 2. 字符混淆：逆向交换
    inputText = swapCharacters(inputText);

    // 3. 恢复位移
    let decrypted = '';
    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        let originalCharCode = (charCode - (hash & 0xFF) + 256) % 256; // 恢复字符
        decrypted += String.fromCharCode(originalCharCode);
    }

    // 显示解密后的结果
    document.getElementById('outputText').value = decrypted;
}

// 简单字符交换算法
function swapCharacters(str) {
    let swapped = '';
    for (let i = 0; i < str.length; i += 2) {
        // 每两字符交换一次
        if (i + 1 < str.length) {
            swapped += str.charAt(i + 1) + str.charAt(i);
        } else {
            swapped += str.charAt(i);
        }
    }
    return swapped;
}

// 在加密文本中注入噪音字符
function injectNoise(str) {
    let noise = '!@#$%^&*()_+-=~<>?/';
    let noisyText = '';
    for (let i = 0; i < str.length; i++) {
        noisyText += str.charAt(i);
        // 以一定概率插入噪音字符
        if (Math.random() < 0.1) {
            noisyText += noise.charAt(Math.floor(Math.random() * noise.length));
        }
    }
    return noisyText;
}

// 从加密文本中移除噪音字符
function removeNoise(str) {
    let cleanText = '';
    for (let i = 0; i < str.length; i++) {
        if ('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.indexOf(str.charAt(i)) !== -1) {
            cleanText += str.charAt(i);
        }
    }
    return cleanText;
}
