const categories = [
  {
    id: 0,
    name: "Điện ảnh", // 0
  },
  {
    id: 1,
    name: "Hành động", // 1
  },
  {
    id: 2,
    name: "Hình sự", // 2
  },
  {
    id: 3,
    name: "Hài hước", // 3
  },
  {
    id: 4,
    name: "Tình cảm", // 4
  },
  {
    id: 5,
    name: "Viễn tưởng", // 5
  },
  {
    id: 6,
    name: "Tâm lý", // 6
  },
  {
    id: 7,
    name: "Phiêu lưu", // 7
  },
  {
    id: 8,
    name: "Kinh dị", // 8
  },
];

const actors = [
  {
    id: 0,
    image: "./assets/img/KhaNhu.jpg",
    stage_name: "Khả Như",
    name: "Trần Khả Như",
    short_description: `Khả Như (sinh ngày 16 tháng 3 năm 1987) là một nữ diễn viên hài, diễn viên kịch, diễn viên truyền hình, diễn viên điện ảnh, đạo diễn, MC và biên kịch người Việt Nam.`,
    birthday: "16 tháng 3, 1987",
    date_of_death: null,
    featured_movie: `Cua lại vợ bầu, Chuyện ma gần nhà, Nhà bà Nữ, Hoán đổi, 49 Ngày 2, Cho em gần anh thêm chút nữa, Chủ tịch giao hàng, Bi Long đại ca, Mẹ ác ma, cha thiên sứ, Biệt đội 1-0-2, Khi chàng là vợ`,
    job: "Diễn viên",
    prize: "Giải Mai Vàng cho Người dẫn chương trình",
    biography: `
            <br> <b>1987-2010: Chạm đến ước mơ diễn viên</b>
            <br><br> Khả Như tên đầy đủ là Trần Khả Như sinh ngày 16 tháng 3 năm 1987 tại Ngã Bảy, Hậu Giang. Cô sinh ra trong một gia đình có cha mẹ đều là nhân viên công chức nên ngày từ nhỏ, Khả Như đã được giáo dục bằng kỷ luật 'thép' của cha mình. Khả Như có 9 năm để học võ Vovinam, cô còn tốt nghiệp cả ngành kế toán và y dược. Sau khi học xong, cô còn làm việc tại Ủy ban nhân dân phường Hiệp Thành (Thị xã Ngã Bảy) một thời gian.
            <br><br> Vì để có thể ra ở riêng, nữ diễn viên đã hết lần này đến lần khác theo học ở những ngôi trường xa nhà để cô có thể tự do sinh hoạt hơn, việc mà cô không thể làm ở nhà. Sau khi lên Thành phố Hồ Chí Minh, Khả Như đã lén gia đình mình và thi vào Trường Đại học Sân khấu – Điện ảnh Thành phố Hồ Chí Minh, cô cũng đã thoả thuận với gia đình là sẽ quay về làm việc tại Ủy ban nhân dân Thị xã Ngã Bảy. Thời gian đầu, nữ diễn viên không được ai mướn cô làm gì cả nên cô phải đi múa, đi lồng tiếng, đi làm quần chúng, làm mọi thứ để có thể kiếm ra tiền. Từ năm 2, cô đã không còn nhận tiền từ gia đình nữa và bắt đầu tự chi trả các chi phí cho đời sống sinh hoạt của mình.
            <br><br> Sau khi tốt nghiệp Trường Cao Đẳng Sân Khấu - Điện Ảnh Thành phố Hồ Chí Minh vào năm 2011, cô đã phân vân không biết nên ở lại hay quay về vì tương lai trước mắt quá mờ mịt và cô từng nhận được nhận xét là không thể làm được diễn viên. Nữ diễn viên đã định trở về quê nhưng nhưng nhờ tình yêu cũng như kỳ vọng của cha mẹ đã tiếp bước cô ở lại thành phố để tiếp tục sự nghiệp của mình. Sự nghiệp của cô bắt đầu đi lên khi cô tham gia sân khấu kịch Thế Giới trẻ và nhận được nhiều sự yêu quý của khán giả.
            <br><br> <b>2021 - 2022: "Nàng Miêu Nữ" với phong cách nghệ thuật riêng, sự công nhận của công chúng</b>
            <br><br> Cô là diễn viên tại sân khấu kịch Thế giới Trẻ, từng tham gia nhiều vở kịch như Chuyện tình Bangkok, Khát khao của chàng, Mẹ chồng rắc rối, Mua chồng, Cõng mẹ đi chơi,... và nhận được nhiều sự yêu quý của khán giả. Cũng từ đây nàng Miêu Nữ của showbiz Việt trở thành cái tên được công chúng quan tâm.
            <br><br> Khả Như từng tham gia nhóm hài DamTV của Huỳnh Lập, và là nữ diễn viên nhạc kịch của nhóm Buffalo. Vở diễn "Mình ơi" và "Tôi sẽ về quê" do Khả Như dàn dựng mang về giải quán quân cho nhóm và mang Khả Như đến với nhiều khán giả hơn. Với series chiếu mạng "Tiệm nail của Linda" hay "Tiệm tóc của Linda", nữ diễn viên thể hiện sự dí dỏm vui tính của mình qua vai diễn cô nàng Linda xinh đẹp. Năm 2016 cũng là một dấu mốc lớn trong sự nghiệp của Khả Như, khi cô tham gia các sitcom và chương trình Cười Xuyên Việt giúp hình ảnh của cô đến gần khán giả hơn.
            <br><br> Cô còn chứng tỏ được khả năng diễn xuất của mình qua những bộ phim truyền hình như: Hoa Phù Du, Nhà Chung hay nổi bật nhất là vai Lê, cô vợ yêu thương chồng nhưng lắm lời và ích kỷ trong phim Đại Ca U40 cũng đã để lại nhiều ấn tượng cho khán giả. Tiếp nối sự thành công đó cô lấn sân sang điện ảnh như nàng dâu u sầu trong 49 ngày 1 và 2, hay cô chị 2 giỏi võ nhưng ngơ ngác trong Tía Tui Là Cao Thủ, hoặc pháp sư Nguyệt Minh đầy bí ẩn trong Pháp Sư Mù, đặc biệt hơn cả là Thị Liễu đầy mưu mô và toan tính trong Trạng Quỳnh cũng giúp Khả Như khẳng định khả năng diễn xuất của cô. Ngoài ra cô cũng tham gia lồng tiếng cho nhiều dự án phim hoạt hình nổi tiếng như The secret life of pets, Aladdin, Hotel Transylvania...
            <br><br> Khoảng thời gian này, cô nhận được nhiều yêu thương và quan tâm của công chúng với 2 giải Mai Vàng cho nữ diễn sân khấu được yêu thích nhất, đến năm 2018 cô còn tổ chức buổi fan-meeting để cảm ơn Catcage trong suốt thời gian hoạt động sự nghiệp. Cô còn thể hiện được sự vui tính của mình khi xuất hiện ở các chương trình truyền hình, các talkshow hay các liveshow của những đàn anh trong nghề.
            <br><br> <b>2020-nay: Tiếp tục phát triển sự nghiệp và được đón nhận</b>
            <br><br> Bước qua một thập kỷ mới, Khả Như liền có nhưng nấc thang mới cho sự nghiệp của mình. Vai chính điện ảnh trong sự nghiệp đã tới với cô, Quế Phương - một bà mẹ đơn thân cá tính luôn cùng con mình bày trò lừa đảo nhưng vẫn có một tình thương sâu sắc dành cho con mình đã giúp nữ diễn viên lấy trọn nước mặt khán ngoài rạp phim. Góp mặt trong những web-drama ăn khách như Bố Già, Bi Long Đại Ca cũng phần nào khiến cô được khán giả yêu thương hơn.
            <br><br> Đến 5/2020 cô chính thức trở thành giám đốc điều hành của công ty đầu tư phim Ruby Media, cô còn là nhà sáng lập công ty Giải Trí - Sản Xuất BLINQ Entertainment. Qua đó phần nào nói lên được sự cố gắng và nỗ lực của cô trong suốt chặng đường 10 năm hoạt động nghệ thuật vừa qua. Sự xuất hiện dày đặc của cô trên các gameshow cũng phần nào nói lên được sự yêu quý của khán giả dành cho cô.
            <br><br> Đến cuối năm 2020, Khả Như cho ra mắt dự án hát cover Khả Như's little secrets dành tặng cho người hâm mộ của mình. Khả Như cũng là một nghệ sĩ trẻ được yêu thích với hơn 1M lượt follow trang cá nhân, 1M lượt follow fanpage, 500k lượt follow trên Instagram cùng kênh youtube hơn 200k lượt đăng ký.
            <br><br> Năm 2022, Khả Như gặp nhiều may mắn khi bộ phim do công ty cô đầu tư Rừng Thế Mạng được ra rạp, tuy không được khán giả đánh giá cao nhưng phim vẫn đem về doanh thu ổn định. Đến ngày 11 tháng 2 ăm 2022, Khả Như đóng chính trong bộ phim 	Chuyện Ma Gần Nhà, phim gây được cơn suốt với khán giả khi là phim Việt Nam đầu tiên có sự xuất hiện của ma thật.
        `,
  },
  {
    id: 1,
    image: "./assets/img/HoangDung.jpg",
    stage_name: "NSND Hoàng Dũng",
    name: "Hoàng Tiến Dũng",
    short_description: "",
    birthday: "31 tháng 12, 1956, Hà Nội",
    date_of_death: "14 tháng 2, 2021, Viện Huyết học - Truyền máu Trung ương",
    featured_movie: "Người phán xử, Về nhà đi con…",
    job: "Diễn viên hài, MC, diễn viên điện ảnh, ca sĩ",
    prize: "Giải Cánh diều, giải Mai Vàng và giải Ấn tượng VTV",
    biography: `
            <br> Hoàng Dũng ban đầu tốt nghiệp trường Cao đẳng Nghệ thuật Hà Nội năm 1978 rồi về công tác tại Đoàn kịch Hà Nội, trụ sở ở số 8B Tạ Hiện. Năm 1993, Đoàn kịch Hà Nội được nâng cấp thành Nhà hát kịch Hà Nội và được cấp rạp Công Nhân trên phố Tràng Tiền.
            <br><br> Sau đó ông được bổ nhiệm làm phó giám đốc Nhà hát kịch Hà Nội từ năm 2002 và làm giám đốc nhà hát từ tháng 12 năm 2007 đến tháng 1 năm 2017 thì ông chính thức nghỉ hưu theo chế độ.
            <br><br> Ngoài cương vị giám đốc Nhà hát kịch Hà Nội, Hoàng Dũng còn là ủy viên ban chấp hành, ủy viên Hội đồng nghệ thuật của Hội Nghệ sĩ sân khấu Việt Nam, Phó chủ tịch Hội Sân khấu Hà Nội, ủy viên Hội đồng nghệ thuật của thành phố Hà Nội.
            <br><br> Trên sân khấu kịch, Hoàng Dũng được ví như một "con dao pha", nghĩa là ông có thể đảm đương nhiều vai diễn thuộc các thể loại khác nhau, vai hài, vai bi, vai chính, vai phụ... Hoàng Dũng dần chinh phục được khán giả bằng tài năng qua những vai diễn “nặng ký”: phó giám đốc Chính trong vở kịch nổi tiếng của Lưu Quang Vũ Tôi và chúng ta, Lãm trong Hà Nội đêm trở gió, Hai Hùng trong Ăn mày dĩ vãng, Cả Khoa trong Cát bụi...
            <br><br> Sau hàng loạt những huy chương vàng tại các kỳ Hội diễn sân khấu chuyên nghiệp Toàn quốc, những vai diễn để đời, Hoàng Dũng được phong tặng danh hiệu Nghệ sĩ Nhân dân năm 2007.
            <br><br> Cũng với vai diễn Tướng Tuấn trong tác phẩm điện ảnh "Tiếng cồng định mệnh" (đạo diễn Khắc Lợi), NSND Hoàng Dũng đã vinh dự giành giải thưởng Cánh diều vàng cho Nam diễn viên chính xuất sắc nhất năm 2004.
            <br><br> Nhận xét về Hoàng Dũng, nghệ sĩ nhân dân Khắc Lợi nói: "Hoàng Dũng là một người biết trân trọng nghề nghiệp, làm việc rất nghiêm túc và sáng tạo".
            <br><br> Ngoài ra, với vai diễn Phan Quân trong Người phán xử, ông cũng được trao giải Nam diễn viên ấn tượng tại lễ trao giải VTV Award 2017
        `,
  },
  {
    id: 2,
    image: "./assets/img/ThuyNgan.jpg",
    stage_name: "Thúy Ngân",
    name: "Lê Huỳnh Thúy Ngân",
    short_description: "",
    birthday: "5 tháng 4, 1991",
    date_of_death: null,
    featured_movie: `Gạo nếp gạo tẻ, Cây táo nở hoa, Gia đình phép thuật, ...`,
    job: "Giải Mai Vàng, Vietnam Entertainment Awards, Á khôi 1 - Hoa khôi Trang sức Việt Nam 2009, Top 20 - Hoa hậu Việt Nam 2010 và Top 20 - Nữ hoàng Du lịch Quốc tế 2011",
    prize: "",
    biography: `
            <br> Năm 2009, Thúy Ngân giành danh hiệu Á hoàng 1 cuộc thi Nữ hoàng Trang sức Việt Nam. Sau đó, cô nộp hồ sơ ghi danh tại cuộc thi Hoa hậu Thế giới người Việt 2010 nhưng đến phút chót cô lại đổi ý và đăng ký thi Hoa hậu Việt Nam 2010. Ở cuộc thi, cô góp mặt trong Top 20.
            <br><br> Sau đó, cô được chọn làm đại diện của Việt Nam tham gia cuộc thi Nữ hoàng Du lịch Quốc tế 2011 và xuất sắc ghi tên vào Top 20. Thành công trên các đấu trường nhan sắc nhưng ít ai biết gia đình của Á hoàng Thúy Ngân khá khó khăn. Sự nghiệp người mẫu đang phát triển mạnh nhưng Thúy Ngân lại quyết định rẽ hướng sang điện ảnh.
            <br><br> Năm 2018, Thúy Ngân đánh dấu sự thành công trong sự nghiệp diễn xuất của mình với vai Ngọc Hân trong phim Gạo nếp gạo tẻ. Năm 2021, Thúy Ngân góp mặt trong bộ phim Cây táo nở hoa và chương trình Running Man Vietnam mùa 2.
        `,
  },
  {
    id: 3,
    image: "./assets/img/AnhTu.jpg",
    stage_name: "Anh Tú",
    name: "Bùi Anh Tú",
    short_description: "",
    birthday: "3 tháng 10, 1993",
    date_of_death: null,
    featured_movie: `Siêu lừa gặp siêu lầy, Cua lại vợ bầu, Gia đình là số 1, Hà Nội Em yêu anh, 4 năm 2 chàng 1 tình yêu ...`,
    job: "Diễn viên, ca sĩ",
    prize: "Giải Mai Vàng cho người dẫn chương trình",
    biography: `
            <br> Anh Tú là nam diễn viên, ca sĩ triển vọng của showbiz Việt. Nổi trội với ngoại hình hot boy, cùng cuộc tình đáng yêu với Diệu Nhi, Anh Tú luôn được đông đảo fans quan tâm. Tuy nhiên đến nay sự nghiệp vẫn chưa đạt được thành tựu xuất sắc, mà còn vướng phải scandal tung clip nóng để PR tên tuổi.
            <br><br> Anh Tú sinh ra ở Hà Nội, sau đó theo gia đình vào Thành phố Hồ Chí Minh từ năm 2013. Dù Anh Tú không được sự ủng hộ của gia đình, nhưng vẫn quyết tâm theo đuổi đam mê nghệ thuật. Vẻ ngoài hiền lành, ấm áp nhưng theo chia sẻ của đồng nghiệp thì Anh Tú khá trầm tính.
            <br><br> Giữa chốn thị phi, Anh Tú chọn cho mình con đường riêng để phát triển sự nghiệp. Không dựa vào vẻ soái ca bề ngoài, cũng không muốn “dựa hơi” bạn gái, mà anh luôn cố gắng để trở thành một diễn viên ca sĩ thực tài.
            <br><br> Trong thời gian học tập tại trường Đại Học Sân Khấu Điện Ảnh TP.HCM, Anh Tú tham gia diễn kịch, đóng nhiều phim để trau dồi kinh nghiệm. Tuy nhiên chỉ đến khi tham gia “Hà Nội, Em yêu anh” thì Tú mới bắt đầu được khán giả biết đến. Qua lối diễn xuất tự nhiên, đáng yêu, cùng vẻ đẹp trai khó cưỡng, Anh Tú nhận được phản hồi tích cực và bắt đầu có nhiều fans. Người hâm mộ còn vô tình phát hiện điểm giống nhau của Bùi Anh Tú và diễn viên Cổ Cự Cơ (trong phim “Tân dòng sông ly biệt”) nên từ đó anh có biệt danh là Cổ Cự Cơ Việt Nam.
            <br><br> “Hà Nội, Em yêu anh” như mộ bước đệm cho Anh Tú đi vào con đường diễn xuất và bước vào trái tim của người hâm mộ. Thay vì lấy đó làm bàn đạp, anh lại lựa chọn quay lại tập trung vào học tập, tập kịch và thỉnh thoảng tham gia phim của bạn bè.
            <br><br> Sau khi tốt nghiệp năm 2015, Anh Tú quay trở lại màn ảnh với phim ngôn tình lãng mạn “4 Năm, 2 Chàng, 1 Tình Yêu". Dù phim gặp phải nhiều nhận xét trái chiều từ kịch bản đến diễn viên nhưng vẫn đạt được doanh thu khá cao. Trong dàn diễn viên trẻ đẹp Quỳnh (Midu), Tuấn (Harry Lu) và Thành (Anh Tú), chỉ có Anh Tú là được đào tạo bài bản chính vì thế anh đã thể hiện xuất sắc nhiều cảm xúc khác nhau của nhân vật.
            <br><br> Tuy ít xuất hiện nhưng Anh Tú luôn thể hiện phong cách diễn xuất đa dạng từ anh chàng Kim Long (Gia đình là số 1) mặt dày, siêu bựa, đến giang hồ ngỗ ngáo thứ thiệt trong "Thập Tam Muội". Đặc biệt quay lại với hình tượng soái ca Qúy Khánh (Cua lại vợ bầu) đã hoàn toàn chinh phục khán giả. Nếu Thành là chàng học sinh hotboy với tình yêu trong sáng thì Quý Khánh là chuẩn soái ca thành đạt, trưởng thành và lạnh lùng.
            <br><br> Không chỉ là một diễn viên, Anh Tú còn là một ca sĩ có chất giọng đặc biệt ấm áp. Gần đây Anh Tú gây sốc khi tung bản cover “Anh ơi ở lại” được lòng khán giả nhất, và chính thức trở thành “đối thủ nặng cân” của Chi Pu. Ngoài bản cover đình đám, "Nếu không là mãi mãi" cũng được các bạn trẻ nồng nhiệt đón nhận.
        `,
  },
  {
    id: 4,
    image: "./assets/img/HoaiLinh.jpg",
    stage_name: "Hoài Linh",
    name: "Võ Hoài Linh",
    short_description: "",
    birthday: "05/02/1987",
    date_of_death: null,
    featured_movie:
      "Sui gia khắc khẩu, Anh ba khía, Tía ơi con muốn vợ rồi, Hương đồng nội, Nàng tiên có 5 nhà, Tía tui là cao thủ, ...",
    job: "Diễn viên hài, MC, diễn viên điện ảnh, ca sĩ",
    prize:
      "Giải Mai Vàng, Cù Nèo Vàng, HTV Awards, Liên Hoan Truyện Nói Toàn Quốc, và Liên Hoan Truyện Nói Toàn Quốc",
    biography: `
            <br> Hoài Linh sinh ngày 18 tháng 12 năm 1969 tại Cam Ranh, Khánh Hòa trong một gia đình Công giáo có tất cả 6 người con (3 trai, 3 gái) và anh là con thứ 3 và là con trai trưởng trong gia đình. Cha mẹ anh quê ở Đại Lộc, Quảng Nam. Ngoài một người chị cả đã có gia đình còn ở lại Việt Nam, gia đình anh đã sang Hoa Kỳ theo diện HO vào năm 1995 vì trước đó cha anh, ông Võ Tòa, phục vụ trong Lực lượng đặc biệt Việt Nam Cộng hòa với chức vụ Đại úy, bị tù cải tạo 6 năm tại Biên Hòa, cho đến năm 1982 mới được tha về. Mẹ anh, bà Nguyễn Thị Lệ Phương, điều hành một nhà hộ sinh tư ở Cam Ranh.
            <br><br> Hoài Linh sống ở Cam Ranh đến năm 1975 sau đó theo gia đình di tản vào Dầu Giây, anh học hết bậc trung học ở trường phổ thông trung học Thống Nhất A (Trảng Bom). Vào năm 1988, gia đình anh trở về Cam Ranh để lo thủ tục xin hoàn lại nhà cửa bị tịch thu, sau đó vào Thành phố Hồ Chí Minh năm 1992 cho đến ngày sang Hoa Kỳ cuối năm 1993. Trong thời gian này Hoài Linh gia nhập đoàn ca múa nhạc Ponaga, sau đó theo học tại trường múa chuyên tu (tu nghiệp chuyên môn) cho đến năm 1994 lại quay về với đoàn múa.
            <br><br> Khi Hoài Linh có ý định theo múa, gia đình anh đã không đồng ý và tìm cách ngăn cản vì cha mẹ anh muốn anh theo ngành sư phạm nhưng vì vấn đề lý lịch nên không thành. Trong thời gian cộng tác với đoàn múa Ponaga, anh đã đi lưu diễn khắp các tỉnh miền Trung và một số tỉnh miền Nam.
            <br><br> Vũ sư Đặng Hùng là người đã dạy anh về bộ môn múa trong khi về dân ca thì anh tự học. Vào năm 1991, anh tham dự cuộc thi Những giọng hát hay tại Nha Trang và được giải thưởng. Tại Nha Trang, anh gặp Thanh Lộc (một diễn viên của ban kịch tỉnh Khánh Hòa mới giải tán, gia nhập đoàn Ponaga), mời anh phối hợp để làm một cặp hài diễn chung trong chương trình của đoàn. Hoài Linh vui vẻ nhận lời, hai người diễn thử và có kết quả tốt. Rồi từ đó anh chính thức bước vào lãnh vực hài kịch. Lần diễn đầu tiên tại Diên Khánh với màn Tô Ánh Nguyệt tân thời với Thanh Lộc.
            <br><br> Hoài Linh còn có một năng khiếu đặc biệt khác là nói được nhiều giọng địa phương Việt Nam. Do khi di tản vào ở Long Khánh anh đã có dịp nói chuyện với rất nhiều người đến từ các miền khác nhau, nhờ vậy nên Hoài Linh dễ thu nhập được để bắt chước được giọng của nhiều miền trong khi thường ngày anh vẫn nói giọng Quảng Nam với gia đình.
            <br><br> Ngoài khả năng về múa, hát dân ca, diễn hài, Hoài Linh còn hát được cả tân nhạc.
            <br><br> Thời gian định cư tại Hoa Kỳ, gia đình của anh ở tại Orlando, Florida. Tại đây, anh đã được mời điều khiển chương trình một tiệc cưới tại nhà hàng Sài Gòn, sau đó liên tục được mời cộng tác thường trực tại đây cũng như được mời đi show nhiều nơi.
            <br><br> Vào khoảng tháng 10 năm 1994, một mình Hoài Linh trở về California sinh hoạt. Hoài Linh cư ngụ tại nhà ông cậu thứ 10 ở Los Angeles và 2 tuần sau anh mới có dịp xuống Little Saigon và được Nhật Tùng đưa đến quán cà phê Tao Nhân. Tại quán này, anh đã lên tấu hài bài Chuyện tình Karaoke và một bài tân nhạc. Đêm hôm đó cũng có mặt Ngô Tấn Triển, nghệ thuật diễn xuất của Hoài Linh đã được nhà viết kịch bản này để ý tới và sáng tác nhiều kịch bản cho Hoài Linh diễn sau này. Một tuần sau, anh đã gặp danh hài Vân Sơn và được mời hợp tác sau khi danh hài Bảo Liêm đột ngột ngưng hợp tác với Vân Sơn.
            <br><br> Đến tháng 10 năm 1994, cặp Vân Sơn - Hoài Linh chính thức diễn chung với nhau trong chương trình văn nghệ cho một tổ chức ở Quận Cam. Kể từ cuối năm 1995, Hoài Linh cộng tác độc quyền cho Trung tâm Vân Sơn trong những sản phẩm video (kể từ video số 3) và audio, cũng như cùng nhau có mặt tại rất nhiều chương trình đại nhạc hội. Năm 1999, sau khi Hoài Linh trở về Việt Nam hoạt động, Hoài Linh đã tách ra Trung tâm Vân Sơn và đã từng thành lập trung tâm riêng có tên là "Ca nhạc hài hước Hoài Linh". Sau này, Hoài Linh hợp tác với Trung tâm Thúy Nga và Công ty Nụ cười Mới. Anh và danh hài Chí Tài vẫn là bạn của nhau cho`,
  },
  {
    id: 5,
    stage_name: "Mạc Can",
    name: "Lê Trung Can",
    link: "https://vi.wikipedia.org/wiki/M%E1%BA%A1c_Can",
  },
  {
    id: 6,
    stage_name: "Vân Trang",
    name: "Nguyễn ngọc Thùy Trang",
    link: "https://vi.wikipedia.org/wiki/V%C3%A2n_Trang",
  },
  {
    id: 7,
    stage_name: "Thanh Trực",
    name: "Huỳnh Thanh Trực",
    link: "https://nguoinoitieng.tv/nghe-nghiep/dien-vien/huynh-thanh-truc/bcxa",
  },
  {
    id: 8,
    stage_name: "Việt Anh",
    name: "Nguyễn Lê Việt Anh",
    link: "https://vi.wikipedia.org/wiki/Vi%E1%BB%87t_Anh_(di%E1%BB%85n_vi%C3%AAn)",
  },
  {
    id: 9,
    stage_name: "Hồng Đăng",
    name: "Lê Hồng Đăng",
    link: "https://vi.wikipedia.org/wiki/H%E1%BB%93ng_%C4%90%C4%83ng_(di%E1%BB%85n_vi%C3%AAn)",
  },
  {
    id: 10,
    stage_name: "NSND Trung Anh",
    name: "Bùi Trung Anh",
    link: "https://vi.wikipedia.org/wiki/Trung_Anh",
  },
  {
    id: 11,
    stage_name: "NSND Minh Đức",
    name: "Đỗ Thị Đức",
    link: "https://vi.wikipedia.org/wiki/Minh_%C4%90%E1%BB%A9c_(di%E1%BB%85n_vi%C3%AAn)",
  },
  {
    id: 12,
    stage_name: "NSND Hồng Vân",
    name: "",
  },
  {
    id: 13,
    stage_name: "Mai Huỳnh",
    name: "",
  },
  {
    id: 14,
    stage_name: "Lê Phương",
    name: "",
  },
  {
    id: 15,
    stage_name: "Trung Dũng",
    name: "",
  },
  {
    id: 16,
    stage_name: "Phương Hằng",
    name: "",
  },
  {
    id: 17,
    stage_name: "Bé Bảo Bảo",
    name: "",
  },
  {
    id: 18,
    stage_name: "Ngọc Thuận",
    name: "",
  },
  {
    id: 19,
    stage_name: "Mạc Văn Khoa",
    name: "",
  },
  {
    id: 20,
    stage_name: "Ngọc Phước",
    name: "",
  },
  {
    id: 21,
    stage_name: "Trung lùn",
    name: "",
  },
  {
    id: 22,
    stage_name: "Cát Tường",
    name: "",
  },
  {
    id: 23,
    stage_name: "Tấn Beo",
    name: "",
  },
  {
    id: 24,
    stage_name: "Kim Thư",
    name: "",
  },
  {
    id: 25,
    stage_name: "Hiếu Hiền",
    name: "",
  },
  {
    id: 26,
    stage_name: "NSND Việt Anh",
    name: "",
  },
  {
    id: 27,
    stage_name: "Thanh Thủy",
    name: "",
  },
  {
    id: 28,
    stage_name: "",
    name: "",
  },
  {
    id: 999,
    image: "./assets/img/DaoDien.jpg",
    fake_name: "Trần Hữu Tấn",
    stage_name: "NSƯT Nguyễn Danh Dũng",
    name: "Nguyễn Danh Dũng",
    short_description: "",
    birthday: "28 tháng 1, 1970",
    date_of_death: null,
    featured_movie: `Người phán xử, Về nhà đi con, Hương vị tình thân, Nhịp đập trái tim, Thiên đường tình yêu, Một ngày không có em, Nghe trà, ...`,
    job: "Đạo diễn",
    prize:
      "Giải Cánh diều 2016 cho Đạo diễn xuất sắc và Giải Cánh diều 2020 cho Đạo diễn xuất sắc",
    biography: `
            <br> Nguyễn Danh Dũng sinh ngày 28 tháng 1 năm 1970 tại xã Nga Thủy, huyện Nga Sơn, tỉnh Thanh Hóa, dù quê quán là xã Cẩm Nhượng, huyện Cẩm Xuyên, tỉnh Hà Tĩnh.Ông tốt nghiệp Trường Đại học Sân khấu - Điện ảnh vào năm 1998 và có bộ phim đầu tay Rời nhà ra phố được phát sóng trong chương trình Văn nghệ Chủ Nhật.Cũng từ đây mà ông bắt đầu gắn liền với nhiều tác phẩm phát sóng trong chương trình này như Chuyện bên sông, Quà năm mới, Hai bến một dòng sông, Dư âm hạnh phúc, Người ở bến sông.
            <br><br> Năm 2005, bộ phim đầu tiên của ông hợp tác với Công ty Lasta mang tên Ảo ảnh trở thành bộ phim thứ 2 được lựa chọn phát sóng trong khung giờ vàng cho phim truyện Việt Nam trên kênh HTV7. Mặc dù nhận được nhiều ý kiến trái chiều, nhưng những bộ phim tiếp theo của Nguyễn Danh Dũng phát sóng trên Đài Truyền hình Thành phố Hồ Chí Minh như Nhịp đập trái tim, Thiên đường tình yêu, Một ngày không có em đều đạt được sự thành công nhất định.
            <br><br> Năm 2009, ông tiếp tục cho ra mắt bộ phim Nghe trà. Đây là một bộ phim có đề tài khá đặc biệt so với những tác phẩm trước đây của Nguyễn Danh Dũng khi nói về văn hóa trà của Việt Nam .Từ năm 2010, ông quay trở lại với những bộ phim được phát sóng trên Đài truyền hình Việt Nam, đặc biệt là những bộ phim được phát sóng vào dịp Tết Nguyên Đán hoặc vào những khung giờ vàng.
            <br><br> Về sau, ông lần lượt cho ra mắt nhiều bộ phim đề tài hình sự như: Khi đàn chim trở về, Cảnh sát đặc nhiệm, Người phán xử. Đặc biệt là bộ phim Người phán xử thuộc loạt phim Cảnh sát hình sự nổi tiếng không chỉ tạo nên cơn sốt đối với khán giả Việt Nam ,đạt được lượng người xem kỷ lục,[10] mà còn thu được giúp Đài Truyền hình Việt Nam thu được 192 tỷ đồng nhờ quảng cáo.
            <br><br> Sau Người phán xử, bộ phim Về nhà đi con của Nguyễn Danh Dũng ra mắt vào năm 2018 tiếp tục tạo nên một cơn sốt mới của phim truyền hình Việt NamKhông chỉ thu hút được sự chú ý mạnh mẽ từ phía khán giả mà bộ phim còn đạt được nhiều đề cử và giải thưởng trong các lễ trao giải lớn của năm 2019Sau bộ phim Khi đàn chim trở về phần 3 phát sóng năm 2015,đây cũng là bộ phim giúp Nguyễn Danh Dũng lần thứ 2 đạt được giải thưởng Đạo diễn xuất sắc nhất của Giải Cánh diều.Theo ước tính, doanh thu từ quảng cáo của Về nhà đi con có thể lên đến 200 tỷ đồngTháng 7 cùng năm, Nguyễn Danh Dũng được đề nghị xét duyệt danh hiệu Nghệ sĩ ưu túđến tháng 8 thì ông chính thức được nhà nước Việt Nam phong tặng danh hiệu này
            <br><br> Nguyễn Danh Dũng mở đầu năm 2020 với bộ phim Mùa xuân ở lại, một trong những bộ phim truyền hình Việt Nam hiếm hoi về đề tài dân tộc thiểu số và đã nhận được nhiều phản hồi tích .Bộ phim được phát sóng trên kênh VTV1 vào dịp Tết Nguyên Đán với thời lượng ban đầu là 4 tập và mỗi tập 45 phút, về sau để đáp ứng nhu cầu của tác giả, Đài Truyền hình Việt Nam đã biên tập lại nội dung và phát sóng với thời lượng 10 tập và mỗi tập 25 phút.
            <br><br> Trong bối cảnh Đại dịch COVID-19, Nguyễn Danh Dũng tiếp tục cho ra mắt bộ phim Những ngày không quên là phần ngoại truyện đặc biệt của Về nhà đi con kết hợp với bộ phim Cô gái nhà người ta .Đây tiếp tục là một bộ phim gây chú ý đối với khán giả Việt Nam khi phản ánh chân thực xã hội cũng như con người trong tình hình đại dịch COVID-19 bùng nổ, ảnh hưởng đến nhiều mặt của cuộc sống.Để có thể thực hiện được mục đích tuyên truyền về cách phòng chống dịch bệnh, bộ phim đã được khởi máy và chiếu ngay trong thời kỳ giãn cách xã hội vì COVID-19
        `,
  },
  {
    id: 999,
    image: "./assets/img/DaoDien.jpg",
    fake_name: "NSƯT Nguyễn Danh Dũng",
    stage_name: "NSƯT Nguyễn Danh Dũng",
    name: "Nguyễn Danh Dũng",
    short_description: "",
    birthday: "28 tháng 1, 1970",
    date_of_death: null,
    featured_movie: `Người phán xử, Về nhà đi con, Hương vị tình thân, Nhịp đập trái tim, Thiên đường tình yêu, Một ngày không có em, Nghe trà, ...`,
    job: "Đạo diễn",
    prize:
      "Giải Cánh diều 2016 cho Đạo diễn xuất sắc và Giải Cánh diều 2020 cho Đạo diễn xuất sắc",
    biography: `
            <br> Nguyễn Danh Dũng sinh ngày 28 tháng 1 năm 1970 tại xã Nga Thủy, huyện Nga Sơn, tỉnh Thanh Hóa, dù quê quán là xã Cẩm Nhượng, huyện Cẩm Xuyên, tỉnh Hà Tĩnh.Ông tốt nghiệp Trường Đại học Sân khấu - Điện ảnh vào năm 1998 và có bộ phim đầu tay Rời nhà ra phố được phát sóng trong chương trình Văn nghệ Chủ Nhật.Cũng từ đây mà ông bắt đầu gắn liền với nhiều tác phẩm phát sóng trong chương trình này như Chuyện bên sông, Quà năm mới, Hai bến một dòng sông, Dư âm hạnh phúc, Người ở bến sông.
            <br><br> Năm 2005, bộ phim đầu tiên của ông hợp tác với Công ty Lasta mang tên Ảo ảnh trở thành bộ phim thứ 2 được lựa chọn phát sóng trong khung giờ vàng cho phim truyện Việt Nam trên kênh HTV7. Mặc dù nhận được nhiều ý kiến trái chiều, nhưng những bộ phim tiếp theo của Nguyễn Danh Dũng phát sóng trên Đài Truyền hình Thành phố Hồ Chí Minh như Nhịp đập trái tim, Thiên đường tình yêu, Một ngày không có em đều đạt được sự thành công nhất định.
            <br><br> Năm 2009, ông tiếp tục cho ra mắt bộ phim Nghe trà. Đây là một bộ phim có đề tài khá đặc biệt so với những tác phẩm trước đây của Nguyễn Danh Dũng khi nói về văn hóa trà của Việt Nam .Từ năm 2010, ông quay trở lại với những bộ phim được phát sóng trên Đài truyền hình Việt Nam, đặc biệt là những bộ phim được phát sóng vào dịp Tết Nguyên Đán hoặc vào những khung giờ vàng.
            <br><br> Về sau, ông lần lượt cho ra mắt nhiều bộ phim đề tài hình sự như: Khi đàn chim trở về, Cảnh sát đặc nhiệm, Người phán xử. Đặc biệt là bộ phim Người phán xử thuộc loạt phim Cảnh sát hình sự nổi tiếng không chỉ tạo nên cơn sốt đối với khán giả Việt Nam ,đạt được lượng người xem kỷ lục,[10] mà còn thu được giúp Đài Truyền hình Việt Nam thu được 192 tỷ đồng nhờ quảng cáo.
            <br><br> Sau Người phán xử, bộ phim Về nhà đi con của Nguyễn Danh Dũng ra mắt vào năm 2018 tiếp tục tạo nên một cơn sốt mới của phim truyền hình Việt NamKhông chỉ thu hút được sự chú ý mạnh mẽ từ phía khán giả mà bộ phim còn đạt được nhiều đề cử và giải thưởng trong các lễ trao giải lớn của năm 2019Sau bộ phim Khi đàn chim trở về phần 3 phát sóng năm 2015,đây cũng là bộ phim giúp Nguyễn Danh Dũng lần thứ 2 đạt được giải thưởng Đạo diễn xuất sắc nhất của Giải Cánh diều.Theo ước tính, doanh thu từ quảng cáo của Về nhà đi con có thể lên đến 200 tỷ đồngTháng 7 cùng năm, Nguyễn Danh Dũng được đề nghị xét duyệt danh hiệu Nghệ sĩ ưu túđến tháng 8 thì ông chính thức được nhà nước Việt Nam phong tặng danh hiệu này
            <br><br> Nguyễn Danh Dũng mở đầu năm 2020 với bộ phim Mùa xuân ở lại, một trong những bộ phim truyền hình Việt Nam hiếm hoi về đề tài dân tộc thiểu số và đã nhận được nhiều phản hồi tích .Bộ phim được phát sóng trên kênh VTV1 vào dịp Tết Nguyên Đán với thời lượng ban đầu là 4 tập và mỗi tập 45 phút, về sau để đáp ứng nhu cầu của tác giả, Đài Truyền hình Việt Nam đã biên tập lại nội dung và phát sóng với thời lượng 10 tập và mỗi tập 25 phút.
            <br><br> Trong bối cảnh Đại dịch COVID-19, Nguyễn Danh Dũng tiếp tục cho ra mắt bộ phim Những ngày không quên là phần ngoại truyện đặc biệt của Về nhà đi con kết hợp với bộ phim Cô gái nhà người ta .Đây tiếp tục là một bộ phim gây chú ý đối với khán giả Việt Nam khi phản ánh chân thực xã hội cũng như con người trong tình hình đại dịch COVID-19 bùng nổ, ảnh hưởng đến nhiều mặt của cuộc sống.Để có thể thực hiện được mục đích tuyên truyền về cách phòng chống dịch bệnh, bộ phim đã được khởi máy và chiếu ngay trong thời kỳ giãn cách xã hội vì COVID-19
        `,
  },
  {
    id: 999,
    image: "./assets/img/DaoDien.jpg",
    fake_name: "Võ Thạch Thảo",
    stage_name: "NSƯT Nguyễn Danh Dũng",
    name: "Nguyễn Danh Dũng",
    short_description: "",
    birthday: "28 tháng 1, 1970",
    date_of_death: null,
    featured_movie: `Người phán xử, Về nhà đi con, Hương vị tình thân, Nhịp đập trái tim, Thiên đường tình yêu, Một ngày không có em, Nghe trà, ...`,
    job: "Đạo diễn",
    prize:
      "Giải Cánh diều 2016 cho Đạo diễn xuất sắc và Giải Cánh diều 2020 cho Đạo diễn xuất sắc",
    biography: `
            <br> Nguyễn Danh Dũng sinh ngày 28 tháng 1 năm 1970 tại xã Nga Thủy, huyện Nga Sơn, tỉnh Thanh Hóa, dù quê quán là xã Cẩm Nhượng, huyện Cẩm Xuyên, tỉnh Hà Tĩnh.Ông tốt nghiệp Trường Đại học Sân khấu - Điện ảnh vào năm 1998 và có bộ phim đầu tay Rời nhà ra phố được phát sóng trong chương trình Văn nghệ Chủ Nhật.Cũng từ đây mà ông bắt đầu gắn liền với nhiều tác phẩm phát sóng trong chương trình này như Chuyện bên sông, Quà năm mới, Hai bến một dòng sông, Dư âm hạnh phúc, Người ở bến sông.
            <br><br> Năm 2005, bộ phim đầu tiên của ông hợp tác với Công ty Lasta mang tên Ảo ảnh trở thành bộ phim thứ 2 được lựa chọn phát sóng trong khung giờ vàng cho phim truyện Việt Nam trên kênh HTV7. Mặc dù nhận được nhiều ý kiến trái chiều, nhưng những bộ phim tiếp theo của Nguyễn Danh Dũng phát sóng trên Đài Truyền hình Thành phố Hồ Chí Minh như Nhịp đập trái tim, Thiên đường tình yêu, Một ngày không có em đều đạt được sự thành công nhất định.
            <br><br> Năm 2009, ông tiếp tục cho ra mắt bộ phim Nghe trà. Đây là một bộ phim có đề tài khá đặc biệt so với những tác phẩm trước đây của Nguyễn Danh Dũng khi nói về văn hóa trà của Việt Nam .Từ năm 2010, ông quay trở lại với những bộ phim được phát sóng trên Đài truyền hình Việt Nam, đặc biệt là những bộ phim được phát sóng vào dịp Tết Nguyên Đán hoặc vào những khung giờ vàng.
            <br><br> Về sau, ông lần lượt cho ra mắt nhiều bộ phim đề tài hình sự như: Khi đàn chim trở về, Cảnh sát đặc nhiệm, Người phán xử. Đặc biệt là bộ phim Người phán xử thuộc loạt phim Cảnh sát hình sự nổi tiếng không chỉ tạo nên cơn sốt đối với khán giả Việt Nam ,đạt được lượng người xem kỷ lục,[10] mà còn thu được giúp Đài Truyền hình Việt Nam thu được 192 tỷ đồng nhờ quảng cáo.
            <br><br> Sau Người phán xử, bộ phim Về nhà đi con của Nguyễn Danh Dũng ra mắt vào năm 2018 tiếp tục tạo nên một cơn sốt mới của phim truyền hình Việt NamKhông chỉ thu hút được sự chú ý mạnh mẽ từ phía khán giả mà bộ phim còn đạt được nhiều đề cử và giải thưởng trong các lễ trao giải lớn của năm 2019Sau bộ phim Khi đàn chim trở về phần 3 phát sóng năm 2015,đây cũng là bộ phim giúp Nguyễn Danh Dũng lần thứ 2 đạt được giải thưởng Đạo diễn xuất sắc nhất của Giải Cánh diều.Theo ước tính, doanh thu từ quảng cáo của Về nhà đi con có thể lên đến 200 tỷ đồngTháng 7 cùng năm, Nguyễn Danh Dũng được đề nghị xét duyệt danh hiệu Nghệ sĩ ưu túđến tháng 8 thì ông chính thức được nhà nước Việt Nam phong tặng danh hiệu này
            <br><br> Nguyễn Danh Dũng mở đầu năm 2020 với bộ phim Mùa xuân ở lại, một trong những bộ phim truyền hình Việt Nam hiếm hoi về đề tài dân tộc thiểu số và đã nhận được nhiều phản hồi tích .Bộ phim được phát sóng trên kênh VTV1 vào dịp Tết Nguyên Đán với thời lượng ban đầu là 4 tập và mỗi tập 45 phút, về sau để đáp ứng nhu cầu của tác giả, Đài Truyền hình Việt Nam đã biên tập lại nội dung và phát sóng với thời lượng 10 tập và mỗi tập 25 phút.
            <br><br> Trong bối cảnh Đại dịch COVID-19, Nguyễn Danh Dũng tiếp tục cho ra mắt bộ phim Những ngày không quên là phần ngoại truyện đặc biệt của Về nhà đi con kết hợp với bộ phim Cô gái nhà người ta .Đây tiếp tục là một bộ phim gây chú ý đối với khán giả Việt Nam khi phản ánh chân thực xã hội cũng như con người trong tình hình đại dịch COVID-19 bùng nổ, ảnh hưởng đến nhiều mặt của cuộc sống.Để có thể thực hiện được mục đích tuyên truyền về cách phòng chống dịch bệnh, bộ phim đã được khởi máy và chiếu ngay trong thời kỳ giãn cách xã hội vì COVID-19
        `,
  },
  {
    id: 999,
    image: "./assets/img/DaoDien.jpg",
    fake_name: "Võ Thanh Hòa",
    stage_name: "NSƯT Nguyễn Danh Dũng",
    name: "Nguyễn Danh Dũng",
    short_description: "",
    birthday: "28 tháng 1, 1970",
    date_of_death: null,
    featured_movie: `Người phán xử, Về nhà đi con, Hương vị tình thân, Nhịp đập trái tim, Thiên đường tình yêu, Một ngày không có em, Nghe trà, ...`,
    job: "Đạo diễn",
    prize:
      "Giải Cánh diều 2016 cho Đạo diễn xuất sắc và Giải Cánh diều 2020 cho Đạo diễn xuất sắc",
    biography: `
            <br> Nguyễn Danh Dũng sinh ngày 28 tháng 1 năm 1970 tại xã Nga Thủy, huyện Nga Sơn, tỉnh Thanh Hóa, dù quê quán là xã Cẩm Nhượng, huyện Cẩm Xuyên, tỉnh Hà Tĩnh.Ông tốt nghiệp Trường Đại học Sân khấu - Điện ảnh vào năm 1998 và có bộ phim đầu tay Rời nhà ra phố được phát sóng trong chương trình Văn nghệ Chủ Nhật.Cũng từ đây mà ông bắt đầu gắn liền với nhiều tác phẩm phát sóng trong chương trình này như Chuyện bên sông, Quà năm mới, Hai bến một dòng sông, Dư âm hạnh phúc, Người ở bến sông.
            <br><br> Năm 2005, bộ phim đầu tiên của ông hợp tác với Công ty Lasta mang tên Ảo ảnh trở thành bộ phim thứ 2 được lựa chọn phát sóng trong khung giờ vàng cho phim truyện Việt Nam trên kênh HTV7. Mặc dù nhận được nhiều ý kiến trái chiều, nhưng những bộ phim tiếp theo của Nguyễn Danh Dũng phát sóng trên Đài Truyền hình Thành phố Hồ Chí Minh như Nhịp đập trái tim, Thiên đường tình yêu, Một ngày không có em đều đạt được sự thành công nhất định.
            <br><br> Năm 2009, ông tiếp tục cho ra mắt bộ phim Nghe trà. Đây là một bộ phim có đề tài khá đặc biệt so với những tác phẩm trước đây của Nguyễn Danh Dũng khi nói về văn hóa trà của Việt Nam .Từ năm 2010, ông quay trở lại với những bộ phim được phát sóng trên Đài truyền hình Việt Nam, đặc biệt là những bộ phim được phát sóng vào dịp Tết Nguyên Đán hoặc vào những khung giờ vàng.
            <br><br> Về sau, ông lần lượt cho ra mắt nhiều bộ phim đề tài hình sự như: Khi đàn chim trở về, Cảnh sát đặc nhiệm, Người phán xử. Đặc biệt là bộ phim Người phán xử thuộc loạt phim Cảnh sát hình sự nổi tiếng không chỉ tạo nên cơn sốt đối với khán giả Việt Nam ,đạt được lượng người xem kỷ lục,[10] mà còn thu được giúp Đài Truyền hình Việt Nam thu được 192 tỷ đồng nhờ quảng cáo.
            <br><br> Sau Người phán xử, bộ phim Về nhà đi con của Nguyễn Danh Dũng ra mắt vào năm 2018 tiếp tục tạo nên một cơn sốt mới của phim truyền hình Việt NamKhông chỉ thu hút được sự chú ý mạnh mẽ từ phía khán giả mà bộ phim còn đạt được nhiều đề cử và giải thưởng trong các lễ trao giải lớn của năm 2019Sau bộ phim Khi đàn chim trở về phần 3 phát sóng năm 2015,đây cũng là bộ phim giúp Nguyễn Danh Dũng lần thứ 2 đạt được giải thưởng Đạo diễn xuất sắc nhất của Giải Cánh diều.Theo ước tính, doanh thu từ quảng cáo của Về nhà đi con có thể lên đến 200 tỷ đồngTháng 7 cùng năm, Nguyễn Danh Dũng được đề nghị xét duyệt danh hiệu Nghệ sĩ ưu túđến tháng 8 thì ông chính thức được nhà nước Việt Nam phong tặng danh hiệu này
            <br><br> Nguyễn Danh Dũng mở đầu năm 2020 với bộ phim Mùa xuân ở lại, một trong những bộ phim truyền hình Việt Nam hiếm hoi về đề tài dân tộc thiểu số và đã nhận được nhiều phản hồi tích .Bộ phim được phát sóng trên kênh VTV1 vào dịp Tết Nguyên Đán với thời lượng ban đầu là 4 tập và mỗi tập 45 phút, về sau để đáp ứng nhu cầu của tác giả, Đài Truyền hình Việt Nam đã biên tập lại nội dung và phát sóng với thời lượng 10 tập và mỗi tập 25 phút.
            <br><br> Trong bối cảnh Đại dịch COVID-19, Nguyễn Danh Dũng tiếp tục cho ra mắt bộ phim Những ngày không quên là phần ngoại truyện đặc biệt của Về nhà đi con kết hợp với bộ phim Cô gái nhà người ta .Đây tiếp tục là một bộ phim gây chú ý đối với khán giả Việt Nam khi phản ánh chân thực xã hội cũng như con người trong tình hình đại dịch COVID-19 bùng nổ, ảnh hưởng đến nhiều mặt của cuộc sống.Để có thể thực hiện được mục đích tuyên truyền về cách phòng chống dịch bệnh, bộ phim đã được khởi máy và chiếu ngay trong thời kỳ giãn cách xã hội vì COVID-19
        `,
  },
  {
    id: 999,
    image: "./assets/img/DaoDien.jpg",
    fake_name: "Nguyễn Quang Minh",
    stage_name: "NSƯT Nguyễn Danh Dũng",
    name: "Nguyễn Danh Dũng",
    short_description: "",
    birthday: "28 tháng 1, 1970",
    date_of_death: null,
    featured_movie: `Người phán xử, Về nhà đi con, Hương vị tình thân, Nhịp đập trái tim, Thiên đường tình yêu, Một ngày không có em, Nghe trà, ...`,
    job: "Đạo diễn",
    prize:
      "Giải Cánh diều 2016 cho Đạo diễn xuất sắc và Giải Cánh diều 2020 cho Đạo diễn xuất sắc",
    biography: `
            <br> Nguyễn Danh Dũng sinh ngày 28 tháng 1 năm 1970 tại xã Nga Thủy, huyện Nga Sơn, tỉnh Thanh Hóa, dù quê quán là xã Cẩm Nhượng, huyện Cẩm Xuyên, tỉnh Hà Tĩnh.Ông tốt nghiệp Trường Đại học Sân khấu - Điện ảnh vào năm 1998 và có bộ phim đầu tay Rời nhà ra phố được phát sóng trong chương trình Văn nghệ Chủ Nhật.Cũng từ đây mà ông bắt đầu gắn liền với nhiều tác phẩm phát sóng trong chương trình này như Chuyện bên sông, Quà năm mới, Hai bến một dòng sông, Dư âm hạnh phúc, Người ở bến sông.
            <br><br> Năm 2005, bộ phim đầu tiên của ông hợp tác với Công ty Lasta mang tên Ảo ảnh trở thành bộ phim thứ 2 được lựa chọn phát sóng trong khung giờ vàng cho phim truyện Việt Nam trên kênh HTV7. Mặc dù nhận được nhiều ý kiến trái chiều, nhưng những bộ phim tiếp theo của Nguyễn Danh Dũng phát sóng trên Đài Truyền hình Thành phố Hồ Chí Minh như Nhịp đập trái tim, Thiên đường tình yêu, Một ngày không có em đều đạt được sự thành công nhất định.
            <br><br> Năm 2009, ông tiếp tục cho ra mắt bộ phim Nghe trà. Đây là một bộ phim có đề tài khá đặc biệt so với những tác phẩm trước đây của Nguyễn Danh Dũng khi nói về văn hóa trà của Việt Nam .Từ năm 2010, ông quay trở lại với những bộ phim được phát sóng trên Đài truyền hình Việt Nam, đặc biệt là những bộ phim được phát sóng vào dịp Tết Nguyên Đán hoặc vào những khung giờ vàng.
            <br><br> Về sau, ông lần lượt cho ra mắt nhiều bộ phim đề tài hình sự như: Khi đàn chim trở về, Cảnh sát đặc nhiệm, Người phán xử. Đặc biệt là bộ phim Người phán xử thuộc loạt phim Cảnh sát hình sự nổi tiếng không chỉ tạo nên cơn sốt đối với khán giả Việt Nam ,đạt được lượng người xem kỷ lục,[10] mà còn thu được giúp Đài Truyền hình Việt Nam thu được 192 tỷ đồng nhờ quảng cáo.
            <br><br> Sau Người phán xử, bộ phim Về nhà đi con của Nguyễn Danh Dũng ra mắt vào năm 2018 tiếp tục tạo nên một cơn sốt mới của phim truyền hình Việt NamKhông chỉ thu hút được sự chú ý mạnh mẽ từ phía khán giả mà bộ phim còn đạt được nhiều đề cử và giải thưởng trong các lễ trao giải lớn của năm 2019Sau bộ phim Khi đàn chim trở về phần 3 phát sóng năm 2015,đây cũng là bộ phim giúp Nguyễn Danh Dũng lần thứ 2 đạt được giải thưởng Đạo diễn xuất sắc nhất của Giải Cánh diều.Theo ước tính, doanh thu từ quảng cáo của Về nhà đi con có thể lên đến 200 tỷ đồngTháng 7 cùng năm, Nguyễn Danh Dũng được đề nghị xét duyệt danh hiệu Nghệ sĩ ưu túđến tháng 8 thì ông chính thức được nhà nước Việt Nam phong tặng danh hiệu này
            <br><br> Nguyễn Danh Dũng mở đầu năm 2020 với bộ phim Mùa xuân ở lại, một trong những bộ phim truyền hình Việt Nam hiếm hoi về đề tài dân tộc thiểu số và đã nhận được nhiều phản hồi tích .Bộ phim được phát sóng trên kênh VTV1 vào dịp Tết Nguyên Đán với thời lượng ban đầu là 4 tập và mỗi tập 45 phút, về sau để đáp ứng nhu cầu của tác giả, Đài Truyền hình Việt Nam đã biên tập lại nội dung và phát sóng với thời lượng 10 tập và mỗi tập 25 phút.
            <br><br> Trong bối cảnh Đại dịch COVID-19, Nguyễn Danh Dũng tiếp tục cho ra mắt bộ phim Những ngày không quên là phần ngoại truyện đặc biệt của Về nhà đi con kết hợp với bộ phim Cô gái nhà người ta .Đây tiếp tục là một bộ phim gây chú ý đối với khán giả Việt Nam khi phản ánh chân thực xã hội cũng như con người trong tình hình đại dịch COVID-19 bùng nổ, ảnh hưởng đến nhiều mặt của cuộc sống.Để có thể thực hiện được mục đích tuyên truyền về cách phòng chống dịch bệnh, bộ phim đã được khởi máy và chiếu ngay trong thời kỳ giãn cách xã hội vì COVID-19
        `,
  },
];

const movies = [
  {
    id: 0,
    image: "./assets/img/ChuyenMaGanNha_Poster.jpg", // Ảnh
    name: "Chuyện ma gần nhà", // Tên phim
    premiereDate: "02/ 2022", // Ngày ra mắt
    director: actors.filter((i) => i.id == 999)[0], // Đạo diễn
    categories: [
      categories[0], // Điện ảnh
      categories[8], // Kinh dị
    ],
    episodes: 1,
    duration: "105 phút",
    actors: [
      actors[0], // Khả Như
      actors[5], // Mạc Can
      actors[6], // Vân Trang
      actors[7], // Huỳnh Thanh Trực
    ],
    actorDescriptions: [
      "trong vai Ái Như - một minh tinh màn bạc thế hệ mới, xuất hiện và sống trong căn biệt thự cũ của Lan Hương (nữ diễn viên nổi tiếng luôn được mọi người săn đón vào Khoảng thập niên 1960.",
      "trong vai Thoại Phi - một ảo thuật gia hết thời, ở ẩn trong chung cư cũ.Đây là vai diễn đặc biệt với nghệ sĩ Mạc Can vì ngoài đời thực, ông cũng từng nổi tiếng với vai trò ảo thuật gia.",
      "trong vai Bích - một nhà ngoại cảm nhận lời mời của người đàn ông và phụ nữ trung niên, lên đường tìm kiếm hài cốt người quá cố.",
      "trong vai Đinh Phi - một chàng trai mê ảo thuật nhưng phải bán kẹo bông gòn để kiếm tiền. Anh sống cùng cha ruột Thoại Phi trong một chung cư.",
    ],
    short_description: "Lấy chất liệu từ những “truyền thuyết đô thị” vốn là mảnh đất màu mỡ để khai thác các câu chuyện huyền ảo đáng sợ, Chuyện Ma Gần Nhà của đạo diễn Trần Hữu Tấn tiếp tục đem đến sự khởi sắc cho phim Việt.",
    mainContent: `
            Trong một đêm mưa tại một khu chung cư ở Sài Gòn, năm người bạn trẻ gồm có Lâm, Hà, Quang, Chi và Trường gặp lại nhau sau mười năm xa cách. Khi nhà đột ngột cúp điện, họ bèn kể chuyện ma (chính xác hơn là truyền thuyết đô thị) cho có không khí. 
            <br><br> Câu chuyện đầu tiên kể về Cô Mía, người phụ nữ được vẽ hình trên những xe nước mía. Khoảng thập niên 1960, nữ diễn viên Lan Hương là người nổi tiếng luôn được mọi người săn đón. Thậm chí có người còn vẽ hình cô lên xe nước mía để hút khách. Sau khi bị người xấu hãm hại bằng cách tạt acid, Lan Hương biến mất biệt tăm. Một thời gian sau, Ái Như - minh tinh màn bạc thế hệ mới - xuất hiện và sống trong căn biệt thự cũ của Lan Hương. Nữ diễn viên trẻ tên Ngọc Minh được Ái Như nhận làm học trò. Ái Như bắt buộc Ngọc Minh chia tay Đinh Huy, bạn trai cô, sau đó yêu cầu cô dọn đến ở chung nhà. Ái Như thường cho Ngọc Minh ăn chân yến, giúp cô chăm sóc da mặt, rồi dặn cô đừng thức khuya. Đinh Huy không chấp nhận chia tay và tìm cách tiếp cận Ngọc Minh, rồi anh bất ngờ bị xe tông. Vài ngày sau, Ngọc Minh bị Ái Như nhốt trong căn phòng bí mật, tại đây có người phụ nữ với gương mặt biến dạng. Người phụ nữ đó chính là Ái Như đã bị giam suốt hai mươi năm, còn Ái Như xinh đẹp hiện tại chính là Lan Hương. Năm xưa sau khi bị tạt acid, Lan Hương đã học được tà thuật lột da mặt người khác. Từ đó ả bắt đầu lên kế hoạch lừa những cô diễn viên trẻ đẹp đến nhà, lấy gương mặt của họ và sống với thân phận của họ. Tuy nhiên cứ hai mươi năm trôi qua ả phải thay gương mặt mới. Lan Hương bước vào giết chết Ái Như và chuẩn bị lấy gương mặt của Ngọc Minh. Ngọc Minh cố gắng bỏ chạy thì bị Lan Hương chặn lại. Ngọc Minh đã tự rạch mặt mình khiến Lan Hương điên tiết đâm chết cô gái tội nghiệp này.
            <br><br> Câu chuyện thứ hai kể về Đinh Phi, một anh chàng đam mê ảo thuật, hàng ngày đi bán kẹo bông gòn trước cổng trường học. Anh sống trong khu chung cư cũ với ông Thoại Phi, người cha già tâm trí không minh mẫn. Ông Thoại Phi là ảo thuật gia hết thời, có thờ cúng một mảnh gương của quỷ trong phòng riêng. Sau khi không giữ lời hứa biểu diễn ảo thuật cho một bé gái giấu mặt xem, Đinh Phi bắt đầu thấy những hình ảnh đáng sợ như: người chủ xe hủ tiếu trong hẻm biến thành hồn ma có mắt và miệng trên hai bàn tay, một cô gái diễn xiếc bị phóng dao vào mắt, một sân khấu bí ẩn mà bên dưới hàng ghế khán giả là ông Thoại Phi và vài hồn ma cụt đầu. Đinh Phi liền đưa ông Thoại Phi chạy trốn khỏi các thế lực ma quỷ đang ập đến khu chung cư. Sau đó ông Thoại Phi nói rằng Đinh Phi không tồn tại, điều này tiết lộ rằng Đinh Phi thực ra chỉ là một nhân cách do ông tạo ra nhằm giảm bớt cô đơn trong cuộc đời. Cuối cùng ông Thoại Phi tự sát bằng một nhát dao vào bụng.
            <br><br> Câu chuyện thứ ba kể về Bích, một nhà ngoại cảm. Cô nhận được lời yêu cầu giúp đỡ từ hai người khách là ông Định và bà Hằng, những người muốn nhờ cô đi tìm hài cốt của cô Út, em gái của bà Hằng. Ban đêm Bích thấy giấc mơ chỉ dẫn cô đến Long An, sáng hôm sau cô liền đến đó. Đang đi thì trời đổ mưa, Bích trú mưa trong căn chòi của một bà lão kỳ lạ, người cảnh báo cô đừng đi tìm kiếm nữa. Bích vẫn đi thẳng vào vùng đất tăm tối nhưng không thu được kết quả gì. Khi về nhà, cô bị hù dọa bởi hai đứa trẻ ma và một ma nữ cụt đầu. Dần dần sự thật được tiết lộ: Bích chính là hiện thân của linh hồn cô Út. Ngày xưa cô đã bị một gã đàn ông cưỡng hiếp, giết chết và chặt đầu. Sau đó gã sát nhân chôn đầu của cô tại bãi đất ở Long An. Ông Định mới là nhà ngoại cảm thật sự, ông đã lừa linh hồn cô Út dẫn đến nơi chiếc đầu lâu của cô được chôn. Cuối cùng bà Hằng tìm được đầu lâu của cô Út rồi làm lễ cầu siêu cho cô. Cô Út tạm biệt chị gái mình và đi siêu thoát.
            <br><br> Kể xong ba câu chuyện thì đã quá khuya, nhà cũng có điện trở lại, nhóm bạn trẻ vào phòng trong để ngủ, chỉ còn một mình Trường ngồi lại phòng khách. Đúng lúc đó, TV phát bản tin về một vụ tai nạn giao thông lúc chiều mà nạn nhân tử vong lại chính là Trường, tiết lộ rằng anh đã trở thành hồn ma.
        `,
    review:
      'Sáng ngày 11 tháng 2, đạo diễn Trần Hữu Tấn chia sẻ tin vui trên trang cá nhân, Chuyện ma gần nhà là phim có lượng vé đặt sớm cao nhất lịch sử điện ảnh Việt Nam với 85.000 vé đã được bán. Theo nhà phát hành CGV, một số suất chiếu sau 21h tối ngày 11 tháng 2 có tỷ lệ lấp đầy rạp cao. Phim đã thu về hơn 93 tỷ đồng, trở thành phim có doanh thu cao nhất đầu năm 2022 tại Việt Nam. Trên Google Trend, "Chuyện ma gần nhà" là từ khóa được tìm kiếm nhiều nhất Việt Nam vào ngày 12 tháng 2.',
  },
  {
    id: 1,
    image: "./assets/img/NguoiPhanXu_Poster.jpg",
    name: "Người phán xử",
    premiereDate: "03/ 2017",
    director: actors.filter((i) => i.id == 999)[1],
    categories: [
      categories[6], // Tâm lý
      categories[1], // Hành động
      categories[2], // Hình sự
    ],
    episodes: 47,
    duration: "20-30 phút/ tập (có quảng cáo)",
    actors: [
      actors[1], //'NSND Hoàng Dũng',
      actors[8], //'Việt Anh',
      actors[9], //'Hồng Đăng',
      actors[10], //'NSND Trung Anh'
    ],
    actorDescriptions: [
      "trong vai Phan Quân - ông trùm tập đoàn Phan Thị.",
      "trong vai Phan Hải - con trai Phan Quân, em trai Phan Hương.",
      "trong vai Lê Thành (Phan Thành) - chuyên gia tâm lý, con trai riêng của Phan Quân với bà Tuyết, em trai cùng cha khác mẹ với Phan Hải.",
      "trong vai Lương Bổng - cánh tay phải trung thành của Phan Quân",
    ],
    short_description: "Người phán xử là một bộ phim truyền hình thuộc loạt phim Cảnh sát hình sự được thực hiện bởi Trung tâm Phim truyền hình Việt Nam, Đài Truyền hình Việt Nam do Nguyễn Khải Anh, NSƯT Nguyễn Mai Hiền và NSƯT Nguyễn Danh Dũng làm đạo diễn. Phim được mua kịch bản chuyển thể từ bộ phim truyền hình cùng tên của Israel năm 2007",
    mainContent:
      'Người phán xử là câu chuyện về Phan Quân (NSND Hoàng Dũng) - một ông trùm thế giới ngầm núp bóng doanh nhân thành đạt, chủ tịch của Tập đoàn Phan Thị. Tuy là "con cáo già" với cái đầu lạnh, dã tâm lớn nhưng ông được kính nể bởi cách đối nhân xử thế trọng nghĩa khí, luôn đặt gia đình lên trên hết. Phan Quân còn được gọi là "Người phán xử", có quyền lực bậc nhất trong giới xã hội đen. Không chỉ phải đấu trí với các thế lực thù địch trong giới tội phạm, Phan Quân cũng đau đầu bởi mâu thuẫn trong gia đình, nhất là khi sự xuất hiện bất ngờ của một người tự xưng là con rơi từ nhiều năm trước đã khiến mọi chuyện trở nên rắc rối...',
    review: `
            Được ra mắt cùng thời điểm với phim “Sống chung với mẹ chồng” nhưng “Người phán xử” cũng tỏ ra không hề thua kém về độ hot đối với khán giả. Người phán xử là bộ phim được “remake” từ kịch bản của Israel. Tuy nhiên, bộ phim cũng đã được chỉnh sửa nội dung tới 50% để phù hợp hơn với đối tượng khán giả là người Việt. Đây cũng là bộ phim Việt đầu tiên lấy tội phạm làm nhân vật trung tâm nhằm khai thác những mặt tối trong xã hội. Bộ phim “Người phán xử” được đạo diễn chăm sóc rất chỉn chu từ âm thanh, hình ảnh lẫn cảnh quay, lấy đi không ít nước mắt của người xem trong một vài phân cảnh.
            <br><br> Tại thời điểm phát sóng, Người phán xử đã nhanh chóng nhận được sự quan tâm từ khán giả và đạt lượng người xem "kỷ lục", được cho bởi có nội dung gay cấn, dàn diễn viên hùng hậu, tư duy làm phim hiện đại, cách kể chuyện mới lạ cùng những câu thoại tạo nên trào lưu trên mạng xã hội. Bộ phim cũng được đánh giá là "cú lội ngược dòng" cho phim truyện truyền hình Việt Nam sau nhiều năm thu hút ít người xem.
            <br><br> Theo số liệu từ Hệ thống đo lường định lượng khán giả truyền hình Việt Nam, chỉ số người xem trung bình toàn quốc của Người phán xử đạt 5,42%.Riêng ở Hà Nội, kỷ lục người xem của phim là 18.67% ở tập 27, tương đương với khoảng 606.052 nghìn khán giả xem phim trong một phút phát sóng, và chỉ số người xem trung bình đạt 14,28% Tại Thành phố Hồ Chí Minh, chỉ số người xem trung bình của bộ phim đạt 0,94%, trong đó tập cuối đạt lượng người xem cao nhất 1,79%. Thị phần khán giả theo dõi trung bình cho mỗi lượt phát sóng của bộ phim cũng đạt 37.3%.Bộ phim ngoài ra còn thu về cho nhà đài phát sóng 192 tỉ đồng với 1557 quảng cáo trong suốt 47 tập phim với khoảng 3 tỷ đồng cho trung bình một tập. Giá một TVC 30s để xuất hiện trong giờ quảng cáo của phim có mức giá từ 210 đến 220 triệu đồng. Từ khóa về bộ phim cũng lọt vào danh sách 10 từ khóa được tìm kiếm nhiều nhất trên Internet vào năm 2017 khu vực Việt Nam.
        `,
  },
  {
    id: 2,
    image: "./assets/img/GaoNepGaoTe_Poster.jpg",
    name: "Gạo nếp gạo tẻ",
    premiereDate: "05/ 2018",
    director: actors.filter((i) => i.id == 999)[2],
    categories: [
      categories[6], // Tâm lý
      categories[4], // Tình cảm
    ],
    episodes: `
            <br> Phần 1: 109 tập
            <br> Phần 2: 50 tập
        `,
    duration: `
            <br> Phần 1: 45 phút/ tập (có quảng cáo)
            <br> Phần 2: 30 phút/ tập
        `,
    actors: [
      actors[2], //'NSND Minh Đức',
      actors[11], //'NSND Hồng Vân',
      actors[12], //'Mai Huỳnh',
      actors[13], //'Lê Phương',
      actors[14], //'Thuý Ngân',
      actors[15], //'Trung Dũng',
      actors[16], //'Phương Hằng',
      actors[17], //'Bé Bảo Bảo',
      actors[18], //'Ngọc Thuận',
    ],
    actorDescriptions: [
      "trong vai Bà Đào - mẹ của ông Vương",
      "trong vai Bà Mai - vợ của ông Vương",
      "trong vai Ông Vương - chồng của bà Mai",
      "trong vai Hương - con gái đầu của Ông Vương và Bà Mai",
      "trong vai Hân - con gái thứ hai của Ông Vương và Bà Mai",
      "trong vai Kiệt - chồng của Hân",
      "trong vai Minh - con gái thứ ba của ông Vương và Bà Mai",
      "trong vai Bé Khoa - con trai út của ông Vương và Bà Mai.",
      "trong vai Chú Quang - là em trai của ông Vương.",
    ],
    short_description: "Gạo nếp gạo tẻ là một bộ phim truyền hình được thực hiện bởi Vie Channel do Nguyễn Hoàng Anh và Võ Thạch Thảo làm đạo diễn. Phim được mua kịch bản chuyển thể từ bộ phim nổi tiếng của Hàn Quốc - Gia tộc họ Wang (2013). Phần 1 của phim được phát sóng vào ngày 07/05/2018 và kết thúc vào 15/01/2019. Phần 2 của phim được phát sóng vào 15/06/2020 và kết thúc vào 07/10/2020",
    mainContent: `
            <b>Phần 1:</b>  Gia đình bà Mai và ông Vương, ông Vương - giáo viên dạy lịch sử tại một trường cấp hai, bà Mai làm nội trợ, sống cùng với mẹ và em trai ông Vương. Cả đời nhọc nhằn kiếm tiền vì các con, bà Mai luôn mong muốn các con mình giàu sang và có địa vị xã hội.
                            <br> Hương - cô con gái đầu lòng. Lúc mang thai Hương, cả gia đình rất mong đứa bé sẽ là con trai nên mẹ chồng rất cưng chiều bà Mai. Khi biết Hương là con gái, bà nội rất thất vọng và bạc đãi bà Mai, cùng lúc đó, gia đình gặp nhiều khó khăn nên bà Mai trở nên khó chịu và không hề quan tâm nhiều đến cô con gái đầu lòng này. Đỉnh điểm là đến lúc Hương có bầu trước khi cưới với Công - chồng của Hương, bà Mai lại càng miệt thị Hương nhiều hơn vì cô đã làm mất mặt gia đình. Trong khi đang học dở đại học, Hương phải nghỉ học để nhường cơ hội cho em gái và chú của mình.
                            <br> Mặc dù chịu sự chỉ trích và miệt thị từ mẹ ruột và xã hội, Hương vẫn luôn cố gắng chăm chỉ làm việc để nuôi cả gia đình bé nhỏ. Ngược lại, bà Mai rất cưng chiều Hân - cô con gái thứ hai vì cô lọt vào top 10 Hoa hậu Việt Nam, lấy chồng doanh nhân thành đạt và sau khi cô ra đời, bà Mai trúng xổ số và có tiền sửa sang lại căn nhà. Cô con gái thứ ba tên Minh cũng khiến bà nhức đầu khi tự ý bỏ nghề y để chuyển sang làm biên kịch. Sau đó, bà còn nổi nóng hơn khi cô con gái út tên Minh nhất quyết lấy người chồng đã từng phải vào tù...
            <br><br> <b> Phần 2:</b> Hương có với Hải ba người con gái là Minh Hiếu, Minh Thảo , Minh Hiền, trong đó có một bé không phải là con ruột của Hải mà là kết quả từ phút sai lầm của Hương với người đàn ông lạ mặt. Trong khi đó, Quỳnh cũng sinh cho Hải hai đứa con gái. Chưa dừng ở đó, cả hai tiếp tục “cuộc đua” sinh con trai để củng cố địa vị ở nhà chồng.
                                    <br> Sau đó, Quỳnh và Hương cùng mang thai, lại cùng sinh nở trong một ngày và oái oăm thay, Hương mới là người sinh được con trai, Quỳnh tiếp tục sinh ra cặp bé gái song sinh. Hải âm thầm đem đứa con trai của Hương tráo đổi với một trong hai bé gái sinh đôi của Quỳnh. Hương tưởng đứa con thứ bốn của mình là con gái, còn Quỳnh thì dư sức biết chuyện Hải đã tráo con. Cũng trong giai đoạn đó, đứa con gái thứ ba của Hương là bé Minh Hiền bị thất lạc.           
                                    <br> Trải qua nhiều biến cố, công ty do Hải đứng tên bị vỡ nợ, Quỳnh ôm tiền bỏ trốn cùng gã thầy bói để lại 4 đứa con cho Hải. Bà Hạ Lan - mẹ Hải dùng hết của cải, tài sản để trả nợ và đi tù thay con trai. Mặc cảm tội lỗi và không dám đối diện với thực tế, Hải hèn nhát bỏ trốn để lại 4 đứa con cho Cúc - người giúp việc nuôi dưỡng. Mặt khác, Hương sau khi mất cha cũng đã ôm hận mà dẫn theo 3 đứa con rời bỏ quê hương. Gia đình Hải với những đứa con của hai người vợ chính thức tan đàn xẻ nghé...
        `,
    review: `
            Số lượng người xem phim Gạo nếp gạo tẻ đã tăng lên nên đạo diễn Nguyễn Hoàng Anh ban đầu đã quyết định tăng lên 99 tập. Việc này từng được kỳ vọng là "sẽ làm thay đổi cái kết vốn được coi là không thực sự thỏa đáng của bản gốc." Thế nhưng, khi phim đã phát đến tập 97, khán giả đang mong đợi một cái kết hợp tình hợp lý thì phim bất ngờ được tăng lên 109 tập. Quyết định này sau đó đã gây ra nhiều phản ứng trái chiều trong dư luận.
            <br><br> Bên cạnh đó, nhiều khán giả còn nhận xét, càng về sau, nội dung các tập phim càng bị đuối, nhiều tình tiết kéo dài lê thê. Có khán giả phản ứng: "Từ tập 90 trở đi, chúng tôi không rõ đang xem phim hay xem quảng cáo, bởi cứ 5 phút là quảng cáo. Nội dung phim thì theo kiểu “cố tình câu view”, xây dựng tình huống nhưng lại không có cao trào. Ngay cả tâm lí nhân vật cũng không thực tế”.
        `,
  },
  {
    id: 3,
    image: "./assets/img/SieuLuaGapSieuLay_Poster.jpg",
    name: "Siêu lừa gặp siêu lầy",
    premiereDate: "03/2023",
    director: actors.filter((i) => i.id == 999)[3],
    categories: [
      categories[0], // Điện ảhh
      categories[3], // Hài hước
      categories[1], // Hành động
      categories[7], // Phiêu lưu
    ],
    episodes: 1,
    duration: "2h14p",
    actors: [
      actors[3], //'Anh Tú',
      actors[19], //'Mạc Văn Khoa',
      actors[20], //'Ngọc Phước',
      actors[21], //'Trung Lùn',
      actors[22], //'Cát Tường'
    ],
    actorDescriptions: [
      "trong vai Tú - một tên lừa đảo có tổ chức khét tiếng hơn và đã thực hiện được nhiều phi vụ chưa bao giờ thất bại",
      "trong vai Khoa - một tên lừa đảo khét tiếng tại Việt Nam",
      "trong vai Mã Lai - đồng đội của Tú",
      "trong vai chú Năm - đồng đội khác của Tú",
      "trong vai Khánh - một nữ doanh nhân giàu có (sự thật là một kẻ lừa đảo) nhưng xui thay lại gặp phải nhóm lừa đảo do Tú cầm đầu.",
    ],
    short_description: "Siêu lừa gặp siêu lầy là một bộ phim hài hước, hành động của Việt Nam năm 2023 do Võ Thanh Hòa làm đạo diễn; Mai Bảo Ngọc sản xuất với sự tham gia của các diễn viên chính gồm Anh Tú, Mạc Văn Khoa, Ngọc Phước, Trung Lùn và Cát Tường. Bộ phim lấy chủ đề liên quan đến tội phạm lừa đảo xoay quanh bộ đôi Tú và Khoa, cả hai đã gặp nhau tại Phú Quốc và hợp tác cùng ông Năm và Mã Lai để thực hiện nhiều hành vi trộm cắp.",
    mainContent: 
      `Với mong muốn đổi đời, Khoa (do Mạc Văn Khoa thủ vai) - một tên lừa đảo khét tiếng tại Việt Nam đã đến Phú Quốc với mong muốn lừa đảo để kiếm bộn tiền đổi đời. Trong khi thực hiện hành vi lừa đảo, anh đã vô tình gặp được Tú (do Anh Tú thủ vai) - một tên lừa đảo có tổ chức khét tiếng hơn và đã thực hiện được nhiều phi vụ chưa bao giờ thất bại cùng với ông Năm (do Trung Lùn thủ vai) và Mã Lai (do Ngọc Phước thủ vai). Thấy được tiềm năng từ Tú, Khoa đã xin gia nhập băng và đã được Tú đồng ý sau khi nghe Khoa chia sẻ về câu chuyện khó khăn của mình.
      <br><br> Tại Phú Quốc, cả băng nhóm đã thành công khi thực hiện nhiều phi vụ lừa đảo sau khi phân tích kỹ càng về điểm yếu của đối tượng rồi từ đó giăng bẫy. Các chiêu thức được thiết lập bằng công nghệ cao như việc cải trang, vượt rào hệ thống an ninh cùng nhiều thủ thuật lừa đảo như diễn kịch lợi dụng tình thương. Cuối cùng cả bọn đã tìm hiểu và gặp được nữ doanh nhân Khánh hoạt động được mô tả hoạt động theo mô hình kinh doanh đa cấp và kêu gọi vốn đầu tư. Nhóm của Tú đã thực hiện lừa đảo bà Khánh khi tự nhận là một nhóm tổ chức sự kiện. Tuy nhiên, sau đó sự thật đã bị phơi bày và lộ diện bà Khánh cũng là một kẻ lừa đảo. Ngay sau đó, bà Khánh đã cố gắng bịt đầu mối bằng cách truy lùng băng nhóm của Tú để tránh việc phanh phui sự thật của mình. Cuối cùng, nhóm của Tú cũng đã thành công phơi bày bộ mặt thật của bà Khánh khi trên đường cố gắng tẩu thoát sang nước không dẫn độ về Việt Nam cùng số tiền của các nhà đầu tư.
      <br><br> Mọi chuyện thật sự không hề dễ dàng khi cả team phải đụng độ với một tay siêu lừa khác? Chuyện gì sẽ xảy đến cho team của Khoa và Tú? Xem phim để có câu trả lời các bạn nhé.
    `,
    review:
      "Siêu lừa gặp siêu lầy là bộ phim mà trailer hay hơn tổng thể phim. Những khán giả dễ tính, cần sự giải trí và không muốn suy nghĩ quá nhiều thì phim là một sự chọn lựa khá phù hợp. Cốt truyện, cách dựng phim và yếu tố cảm xúc là những phần mà phim làm chưa tốt nên dù sự tương tác khá ăn ý của dàn diễn viên chính cũng khó lòng cứu vãn cả bộ phim. Hy vọng nếu có phần sau, Siêu lừa gặp siêu lầy sẽ định hình được cho mình phong cách riêng và nâng tầm được chất lượng hơn nữa!",
  },
  {
    id: 4,
    image: "./assets/img/HelloCoBa_Poster.jpg",
    name: "Hello Cô Ba",
    premiereDate: "Tết 2012",
    director: actors.filter((i) => i.id == 999)[4],
    categories: [
      categories[0],  // Điện ảnh
      categories[3],  // Hài hước
      categories[5],   // Viễn tưởng
      categories[7]  // Phiêu lưu
    ],
    episodes: `
            <br> Phiên bản điện ảnh: 1 tập dài
            <br> Phiên bản truyền hình: 4 tập ngắn
        `,
    duration: `
            <br> Phiên bản điện ảnh: 90 phút
            <br> Phiên bản truyền hình: 45 phút/ tập
        `,
    actors: [
      actors[4], //'NSƯT Hoài Linh'
      actors[23], //'Tấn Beo',
      actors[24], //'Kim Thư',
      actors[25], //'Hiếu Hiền',
      actors[26], //'NSND Việt Anh',
      actors[27], //'Thanh Thủy',
    ],
    actorDescriptions: [
      "trong vai Tư Lặn/ Cô Ba - có được siêu năng lực tiên đoán sau dự kiện té giếng",
      "trong vai Châu Lợi Nhuận - hợp tác cùng Tư Lặn mở sòng bói toán, lấy hiệu Cô Ba",
      "trong vai Lành - vợ Tư Lặn",
      "trong vai Năm Mít - đệ tử Tư Lặn (tự nhận)",
      "trong vai Ông Năm - ba của Lành ",
      "trong vai Bà Năm - mẹ của Lành",
      "",
    ],
    short_description: "Hello cô Ba là một bộ phim hài Việt Nam được công chiếu vào dịp Tết 2012 do Hãng phim Phước Sang sản xuất, đạo diễn là Nguyễn Quang Minh, phim dựa trên một kịch bản cùng tên của Thạch Tuyền. Hello cô Ba có sự tham gia của danh hài Hoài Linh, ngoài ra còn có nhiều nghệ sĩ nổi tiếng khác tham gia",
    mainContent: `
            Đây là bộ phim với chủ đề nông thôn Việt Nam, kể về một câu chuyện ly kỳ tại một vùng quê nhỏ và tạo hình của các nghệ sĩ trong phim đơn giản, gần gũi, đậm chất người nông dân với không khí nhà quê, đồng ruộng.
            <br><br> Dựa theo kịch bản cùng tên của Thạch Tuyền, Hello cô Ba bắt đầu bằng một tình huống oái oăm khi anh nông dân Tư Lặn (Hoài Linh đóng) bị té giếng trong lúc vô tình nhìn thấy Lành (Kim Thư đóng) đang tắm nude. Sau tình huống trớ trêu này, Tư Lặn bỗng nhiên phát lộ một khả năng kỳ lạ, đó là khả năng tiên đoán như thần những sự việc đã, đang và sẽ xảy ra. Nhưng quyền năng này đã gây cho anh bao cảnh dở khóc dở cười khi liên tục bị mọi người yêu cầu tiên đoán cho họ mỗi khi tóc anh dựng đứng lên. Ngỡ rằng Tư Lặn từ đây sẽ tốt hơn nhưng ai ngờ, khả năng tiên đoán siêu phàm này đã khiến anh gặp phiền phức đến mức phải bỏ quê lên thành phố, kiếm tiền chuộc lại đàn vịt cho bố vợ.
            <br><br> Lên thành phố, Tư Lặn cùng Châu Lợi Nhuận (Tấn Beo đóng) mở sòng bói toán, lấy hiệu Cô Ba. Cô Ba dần nổi tiếng với tài bói toán siêu phàm, nói đâu trúng đó. Nhưng nổi tiếng nhất chính là màn lên đồng có-một-không-hai: lúc thì cô Ba hóa thân thành mỹ nhân Marilyn Monroe cực quyến rũ với đôi chân thon nuột nà và giọng hát mê hoặc; lúc cô lại biến hóa thành... bạch tuộc Paul tiên đoán tỷ số trúng phóc mùa giải World Cup; thoắt cái cô là nữ hoàng Ai Cập Cleopatra đầy quyền năng ...
        `,
    review: `
            Với thời lượng 90 phút, "Hello Cô Ba" của Phước Sang chỉ là một chuỗi các màn tấu hài được chắp vá thông qua cốt truyện đơn giản, mang đến tiếng cười dễ dãi, "cù lét" khán giả, nhưng sau đó cảm thấy chưa thật thỏa mãn.
            <br><br> Sẽ là lựa chọn sai lầm với những ai cần thưởng thức một tác phẩm nghệ thuật, bởi "Hello cô Ba" đơn giản là một bộ phim giải trí đơn thuần theo kiểu "cười rồi để đó", vốn được xem là thương hiệu hài nhảm riêng có của hãng Phước Sang.
            <br><br> Với Hello Cô Ba, khán giả, nhất là khán giả miền Tây, có thể cảm thấy dễ chịu với hình ảnh nông thôn, nông dân, làng quê, đồng ruộng, những con người chân chất. Tuy vậy, cách kể chuyện của phim còn quá dài dòng, cũ kỹ, tiết tấu chậm, kỹ thuật chuyển cảnh phim kém...
        `,
  },
];
