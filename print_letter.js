function printMyletter() {

  let name, address, date_send, letter, ngay, thang, nam;
  name = document.getElementById("name").value;
  address = document.getElementById("address").value;

  date_send = document.getElementById("date_send").value;
  nam = date_send.slice(0,4);
  thang = date_send.slice(6,7);
  ngay = date_send.slice(8,10);



 
  letter = "Dear " + name 
  + "<br>" + "Bạn thân mến" + "<br>" + "Lời đầu thư, cho phép tôi được gửi lời thăm hỏi và cầu chúc Bình An, Sức khỏe đến Bạn cùng gia đình bạn nhé." + "<br>" + "Bạn thân mến, tôi xin giới thiệu tóm lược về đất nước và con người Việt Nam chúng tôi qua bài thơ: "
   + "<br>" + "Việt Nam quê hương ta "
   + "<br>" + "của nhà thơ: Nguyễn Đình Thi." 
   + "<br><br>" + "Việt Nam đất nước ta ơi" 
   + "<br>" + "Mênh mông biển lúa đâu trời đẹp hơn" 
   + "<br>" + "Cánh cò bay lả rập rờn" 
   + "<br>" + "Mây mờ che đỉnh Trường Sơn sớm chiều" 
   + "<br>" + "Quê hương biết mấy thân yêu" + "<br>" + "Bao nhiêu đời đã chịu nhiều thương đau"
  + "<br>" + "Mặt người vất vả in sâu"
  + "<br>" + "Gái trai cũng một áo nâu nhuộm bùn"
  + "<br><br>" + "Đất nghèo nuôi những anh hùng"
  + "<br>" + "Chìm trong máu lửa lại vùng đứng lên"
  + "<br>" + "Đạp quân thù xuống đất đen"
  + "<br>" + "Súng gươm vứt bỏ lại hiền như xưa"
  + "<br>" + "Việt Nam đất nắng chan hoà"
  + "<br>" + "Hoa thơm quả ngọt bốn mùa trời xanh"
  + "<br>" + "Mắt đen cô gái long lanh"
  + "<br>" + "Yêu ai yêu trọn tấm tình thuỷ chung"
  + "<br>" + "........"
  + "<br>" + "Dải đất chữ S Việt Nam chúng tôi tuyệt vời và vô cùng xinh đẹp. Nơi đây có những khung cảnh thiên nhiên "
  + "<br>" + " hùng vĩ và thơ mộng, với các bãi biển, rừng núi, hang động… Đất nước chúng tôi còn có cả kho tàng "
  + "<br>" + "ẩm thực ngon và đa dạng."
  + "<br>" + "Mong một ngày gần nhất, tôi được đón bạn tại Việt Nam."
  + "<br><br>" + address + ", ngày " + ngay + " tháng " + thang + " nam " + nam

 
  ;

  document.getElementById("result").innerHTML = letter;




}