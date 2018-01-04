
jQuery(document).ready(function() {

    <!-- fill html with right language -->
    jQuery('#call-me-msg').text(MyData.callUs) ;
    jQuery('#welcome-msg').text(MyData.welcomeMessage) ;

    jQuery('#registerAsSup-msg').text(MyData.registerAsSup)  ;
    jQuery('#registerAsBuy-msg').text(MyData.registerAsBuy) ;
    jQuery('#registerAsShip-msg').text(MyData.registerAsShip) ;
    jQuery('#login-msg').text(MyData.login) ;

    jQuery('.catclass').text(MyData.categories) ;

    jQuery('#computers-msg').text(MyData.computers) ;
    jQuery('#lights-msg').text(MyData.lightsMsg) ;
    jQuery('#cars-msg').text(MyData.carsMsg) ;
    jQuery('#food-msg').text(MyData.food) ;


    jQuery('#bestoffers-msg').text(MyData.bestOffers) ;
    jQuery('#aboutus-msg').text(MyData.AboutUs) ;
    jQuery('#contactus-msg').text(MyData.contactUs) ;
    jQuery('#allprouducts-msg').text(MyData.thecompanies) ;
    jQuery('#home-msg').text(MyData.homeMsg) ;

    jQuery('.nameofproduct').text(MyData.nameofproduct) ;
    jQuery('.icon-sale-label').text(MyData.sale) ;


    jQuery('#search-txt').attr( 'placeholder' , MyData.search) ;
    var mySelect = jQuery('#category_id');
    mySelect.append( jQuery('<option></option>').val(0).html(MyData.allCategories) );
    mySelect.append( jQuery('<option></option>').val(1).html(MyData.suppliers) );
    mySelect.append( jQuery('<option></option>').val(2).html(MyData.product) );
    mySelect.append( jQuery('<option></option>').val(3).html(MyData.shippers) );


    jQuery('#fornewsletter').text(MyData.signforsub) ;
    jQuery('#Subscribebtn').text(MyData.subscribe) ;

    jQuery('#site-slogan').text(MyData.siteSlogan) ;
    jQuery('#adress-msg').text(MyData.adressMsg) ;

    jQuery('#customerService1').text(MyData.customerService1) ;
    jQuery('#customerService2').text(MyData.customerService2) ;
    jQuery('#delivey1').text(MyData.delivey1) ;
    jQuery('#delivey2').text(MyData.delivey2) ;
    jQuery('#taregt1').text(MyData.taregt1) ;
    jQuery('#taregt2').text(MyData.taregt2) ;

    jQuery('#topSup').text(MyData.topSup) ;
    jQuery('#topProd').text(MyData.topProd) ;

    jQuery('.companyNameDemo').text(MyData.companyNameDemo) ;
    jQuery('.productNameDemo').text(MyData.productNameDemo) ;
    jQuery('.NoOfVisit').text(MyData.NoOfVisit) ;


}) ;

MyData = {
         "sitename" : "ديلي"
         , "welcomeMessage" : "مرحبا بكم في ديلي"
          , "callUs" : "اتصل بنا"
         ,"allCategories" :"الكل"
         ,"suppliers" :"الموردين"
    ,"shippers" :"شركات الشحن"

    ,"product" :"منتجات"
         , "categories" :"الكاتالوج"
         , "registerAsSup" : "سجل كمورد"
         , "registerAsBuy" : "سجل كمشتري"
         , "registerAsShip" : "سجل كشركة شحن"
         , "login" : "الدخول"
         , "search" : "البحث"
         , "english" : "الانجليزية"
         , "arabic" : "العربية"
         , "homeMsg" : "الرئيسية"
         , "bestOffers" : "افضل العروض"
         , "contactUs" : "اتصل بنا"
         , "AboutUs" : "عنا "
         ,  "theproduct" :"المنتجات"
    ,  "thecompanies" :"الشركات"
        ,  "computers" : "اجهزة الكومبيوتر"
    ,  "lightsMsg" :"الاصاءه"
    ,  "carsMsg" :"  النقل"
    , "nameofproduct" : " بيبسي 2 لتر "
    , "sale" : " تخفيض "
    , "food" : "الاغذية"
    , "signforsub" : " سجل لتحصل على نشرتنا "
    , "subscribe" : "سجل"
    , "siteSlogan" : " اتمم عمليات المشتريات من مكتبك "
    , "adressMsg" : " 5 شارع التسعين التجمع الخماس القاهره الجديدة محافظة القاهره جمهورية مصر العربية "

    , "customerService1" : " خدمة العملاء 24/7 "
    , "customerService2" : "اتصل بنا في اي وقت"
    , "delivey1" : "نساعدك لاتمام عمليات الشراء"
    , "delivey2" : "خيرات متعددة لشركات الشحن"
    , "taregt1" : " نساعدك لتحقيق اهدافك "
    , "taregt2" : "تقديم منتجات عالية الجودة بأفضل الاسعار"


    , "topSup" : " افضل الموردين "
    , "topProd" : "افضل المنتجات"


    , "companyNameDemo" : " شركة بيبسي للمشروبات الغازية "
    , "productNameDemo" : " عصير جهينة مانجو 1.5 لتر "
    , "NoOfVisit" : " عدد الزيارات : "


} ;
