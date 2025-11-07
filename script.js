JavaScript
// ... (code ở trên)
addButton.addEventListener('click', function() {
const taskText = taskInput.value;
// Áp dụng "early return"
if (taskText.trim() === "") {
alert("Vui lòng nhập nội dung!"); // Thêm tí bonus
return;
}
// Tạo một <li> mới
const newTask = document.createElement('li');
newTask.textContent = taskText;
// Thêm vào danh sách
taskList.appendChild(newTask);
// Xóa nội dung input
taskInput.value = "";
});
// ... (code ở dưới)