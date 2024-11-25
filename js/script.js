// 获取页面元素
const pythonCodeInput = document.getElementById('python-code-input');
const executeButton = document.getElementById('execute-button');
const consoleOutput = document.getElementById('console-output');

// 给执行按钮添加点击事件处理函数
executeButton.addEventListener('click', function () {
    // 获取输入的Python代码
    const pythonCode = pythonCodeInput.value;

    // 创建一个FormData对象，用于模拟向后端发送数据
    const formData = new FormData();
    formData.append('pythonCode', pythonCode);

    // 使用fetch API发送POST请求到后端的执行代码接口
    fetch('/execute-python', {
        method: 'POST',
        body: formData
    })
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        // 将后端返回的控制台输出显示在页面上
        consoleOutput.textContent = data;
    })
    .catch(function (error) {
        console.error('执行代码时出错：', error);
        consoleOutput.textContent = '执行代码时出错，请检查输入的代码。';
    });
});