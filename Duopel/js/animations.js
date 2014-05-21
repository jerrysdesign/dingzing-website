init = function(){
      jarallax = new Jarallax();
      
	  //about page animations
	  
	  jarallax.setDefault('#jacket1, #jacket2, #jacket3, #jacket4, #jacket5, #jacket6, #jacket7, #jacket8, #jacket9, #jacket10, #jacket11, #jacket12', {opacity:'0'});
	  jarallax.setDefault('#float1, #float2, #float3', {Left:'-2000px'});
	  jarallax.setDefault('#float4, #float5', {Left:'2000px'});
	  jarallax.setDefault('#stand2, #stand3, #stand5', {Top:'-800px'});
	  jarallax.setDefault('#stand1, #stand4, #stand6', {Top:'800px'});
	  //jarallax.setDefault('#continue', {opacity:'0'});
  
	  
	  //jarallax.addAnimation('#ttl1',[{progress: "0%", opacity:"0"}, {progress: "5%", opacity:"1"}]);
      //jarallax.addAnimation('#ttl1',[{progress: "5%", opacity:"1"}, {progress: "10%", opacity:"1"}]);
      jarallax.addAnimation('#ttl2',[{progress: "25%", opacity:"0"}, {progress: "30%", opacity:"1"}]);
      jarallax.addAnimation('#ttl2',[{progress: "30%", opacity:"1"}]);
	  jarallax.addAnimation('#ttl3',[{progress: "40%", opacity:"0"}, {progress: "45%", opacity:"1"}]);
      jarallax.addAnimation('#ttl3',[{progress: "45%", opacity:"1"}]);
 	  jarallax.addAnimation('#ttl4',[{progress: "65%", opacity:"0"}, {progress: "70%", opacity:"1"}]);
      jarallax.addAnimation('#ttl4',[{progress: "70%", opacity:"1"}]);
	    
	  
      //jarallax.addAnimation('#continue',[{progress: "0%", opacity:"0"}, {progress: "3%", opacity:"1"}]);
      //jarallax.addAnimation('#continue',[{progress: "3%", opacity:"1"}, {progress: "100%"}]);
	  
	  
      jarallax.addAnimation('#jacket1',[{progress: "5%", opacity:"0"}, {progress: "10%", opacity:"1"}]);
      jarallax.addAnimation('#jacket1',[{progress: "10%", opacity:"1"}, {progress: "100%"}]);
      jarallax.addAnimation('#jacket2',[{progress: "8%", opacity:"0"}, {progress: "13%", opacity:"1"}]);
      jarallax.addAnimation('#jacket2',[{progress: "13%", opacity:"1"}, {progress: "100%"}]);  
	  jarallax.addAnimation('#jacket3',[{progress: "8%", opacity:"0"}, {progress: "13%", opacity:"1"}]);
      jarallax.addAnimation('#jacket3',[{progress: "13%", opacity:"1"}, {progress: "100%"}]);  
	  jarallax.addAnimation('#jacket4',[{progress: "11%", opacity:"0"}, {progress: "16%", opacity:"1"}]);
      jarallax.addAnimation('#jacket4',[{progress: "16%", opacity:"1"}, {progress: "100%"}]);	  
	  jarallax.addAnimation('#jacket5',[{progress: "14%", opacity:"0"}, {progress: "19%", opacity:"1"}]);
      jarallax.addAnimation('#jacket5',[{progress: "19%", opacity:"1"}, {progress: "100%"}]);	   
	  jarallax.addAnimation('#jacket6',[{progress: "17%", opacity:"0"}, {progress: "22%", opacity:"1"}]);
      jarallax.addAnimation('#jacket6',[{progress: "22%", opacity:"1"}, {progress: "100%"}]); 
	  jarallax.addAnimation('#jacket7',[{progress: "20%", opacity:"0"}, {progress: "25%", opacity:"1"}]);
      jarallax.addAnimation('#jacket7',[{progress: "25%", opacity:"1"}, {progress: "100%"}]);	
	  jarallax.addAnimation('#jacket8',[{progress: "23%", opacity:"0"}, {progress: "27%", opacity:"1"}]);
      jarallax.addAnimation('#jacket8',[{progress: "27%", opacity:"1"}, {progress: "100%"}]);	 
	  jarallax.addAnimation('#jacket9',[{progress: "25%", opacity:"0"}, {progress: "30%", opacity:"1"}]);
      jarallax.addAnimation('#jacket9',[{progress: "30%", opacity:"1"}, {progress: "100%"}]);	 
	  jarallax.addAnimation('#jacket10',[{progress: "27%", opacity:"0"}, {progress: "32%", opacity:"1"}]);
      jarallax.addAnimation('#jacket10',[{progress: "32%", opacity:"1"}, {progress: "100%"}]);	
	  jarallax.addAnimation('#jacket11',[{progress: "28%", opacity:"0"}, {progress: "33%", opacity:"1"}]);
      jarallax.addAnimation('#jacket11',[{progress: "33%", opacity:"1"}, {progress: "100%"}]);	
	  jarallax.addAnimation('#jacket12',[{progress: "29%", opacity:"0"}, {progress: "34%", opacity:"1"}]);
      jarallax.addAnimation('#jacket12',[{progress: "34%", opacity:"1"}, {progress: "100%"}]);
	  
	  jarallax.addAnimation('#float1',[{progress: "39%", left:"-2000px"}, {progress: "44%", left: "-500px"}]);
      jarallax.addAnimation('#float1',[{progress: "44%", left:"-500px"}, {progress: "100%"}]);
	  jarallax.addAnimation('#float2',[{progress: "39%", left:"-2000px"}, {progress: "44%", left: "-120px"}]);
      jarallax.addAnimation('#float2',[{progress: "44%", left:"-120px"}, {progress: "100%"}]);
	  jarallax.addAnimation('#float3',[{progress: "37%", left:"-2000px"}, {progress: "42%", left: "190px"}]);
      jarallax.addAnimation('#float3',[{progress: "42%", left:"190px"}, {progress: "100%"}]);
	  jarallax.addAnimation('#float4',[{progress: "37%", left:"2000px"}, {progress: "42%", left: "420px"}]);
      jarallax.addAnimation('#float4',[{progress: "42%", left:"420px"}, {progress: "100%"}]);
	  jarallax.addAnimation('#float5',[{progress: "37%", left:"2000px"}, {progress: "42%", left: "960px"}]);
      jarallax.addAnimation('#float5',[{progress: "42%", left:"960px"}, {progress: "100%"}]);
	  
	  jarallax.addAnimation('#stand1',[{progress: "62%", top:"-800px"}, {progress: "67%", top: "-100px"}]);
      jarallax.addAnimation('#stand1',[{progress: "67%", top:"-100px"}, {progress: "100%"}]);
  	  jarallax.addAnimation('#stand2',[{progress: "62%", top:"800px"}, {progress: "67%", top: "400px"}]);
      jarallax.addAnimation('#stand2',[{progress: "67%", top:"400px"}, {progress: "100%"}]);	  
	  jarallax.addAnimation('#stand3',[{progress: "60%", top:"800px"}, {progress: "65%", top: "60px"}]);
      jarallax.addAnimation('#stand3',[{progress: "65%", top:"60px"}, {progress: "100%"}]);
	  jarallax.addAnimation('#stand4',[{progress: "60%", top:"-800px"}, {progress: "65%", top: "360px"}]);
      jarallax.addAnimation('#stand4',[{progress: "65%", top:"360px"}, {progress: "100%"}]);
	  jarallax.addAnimation('#stand5',[{progress: "63%", top:"-800px"}, {progress: "68%", top: "-30px"}]);
      jarallax.addAnimation('#stand5',[{progress: "68%", top:"-30px"}, {progress: "100%"}]);
	  jarallax.addAnimation('#stand6',[{progress: "63%", top:"800px"}, {progress: "68%", top: "300px"}]);
      jarallax.addAnimation('#stand6',[{progress: "68%", top:"300px"}, {progress: "100%"}]);
	  
	  
	  //fabrics page animations
	  
	  jarallax.setDefault('#material1, #material2, #material3', {opacity:'0'});
	  jarallax.setDefault('#laminate1, #laminate2, #laminate3, #laminate4', {opacity:'0'});
	  jarallax.setDefault('#descript1, #descript2, #descript3, #descript4', {opacity:'0'});
	  jarallax.setDefault('#runner', {opacity:'0'});
	  
	  jarallax.addAnimation('#material1',[{progress: "17%", marginTop:"-35px", opacity:"0"}, {progress: "22%", marginTop:"-5px", opacity:"1"}]);
      jarallax.addAnimation('#material1',[{progress: "22%", marginTop:"-5px", opacity:"1"}, {progress: "100%"}]);
	  jarallax.addAnimation('#material2',[{progress: "19%", marginTop:"-30px", opacity:"0"}, {progress: "24%", marginTop:"0", opacity:"1"}]);
      jarallax.addAnimation('#material2',[{progress: "24%", marginTop:"0", opacity:"1"}, {progress: "100%"}]);
	  jarallax.addAnimation('#material3',[{progress: "21%", marginTop:"-40px", opacity:"0"}, {progress: "26%", marginTop:"-10px", opacity:"1"}]);
      jarallax.addAnimation('#material3',[{progress: "26%", marginTop:"-10px", opacity:"1"}, {progress: "100%"}]);
	  
	  jarallax.addAnimation('#laminate1, #laminate2, #laminate3, #laminate4',[{progress: "51%", marginBottom:"-45px", opacity:"0"}, {progress: "56%", marginBottom:"0", opacity:"1"}]);
      jarallax.addAnimation('#laminate1, #laminate2, #laminate3, #laminate4',[{progress: "56%", marginBottom:"0", opacity:"1"}, {progress: "100%"}]);
	  jarallax.addAnimation('#descript1, #descript2, #descript3, #descript4',[{progress: "56%", opacity:"0"}, {progress: "61%", opacity:"1"}]);
      jarallax.addAnimation('#descript1, #descript2, #descript3, #descript4',[{progress: "61%", opacity:"1"}, {progress: "100%"}]);
	  
	  jarallax.addAnimation('#runner',[{progress: "72%", marginTop:"40px", marginRight:"-40px", opacity:"0"}, {progress: "77%", marginTop:"80px", marginRight:"0", opacity:"1"}]);
      jarallax.addAnimation('#runner',[{progress: "77%", marginTop:"80px", marginRight:"0", opacity:"1"}, {progress: "100%", opacity:"1"}]);
	  
    };
