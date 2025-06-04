document.write(`

      <!-- ################################################################
         
		 								footer
         
         ##################################################################-->

      <footer class="footer">
         <div class="content">
            <div class="row">
               <div class="md:col-4">
                  <ul class="no-bullets">
                     <a href="!#">
                        <li class="footer__list-item">Home</li>
                        <li class="footer__list-item">Home</li>
                     </a>
                     <a href="!#">
                        <li class="footer__list-item">Sign Up</li>
                     </a>
                     <a href="!#">
                        <li class="footer__list-item">Downloads</li>
                     </a>
                     <ul>
                     </ul>
                  </ul>
               </div>
               <div class="md:col-4">
                  <ul class="no-bullets">
                     <a href="!#">
                        <li class="footer__list-item">Company Information</li>
                     </a>
                     <a href="!#">
                        <li class="footer__list-item">Contact Us</li>
                     </a>
                     <a href="!#">
                        <li class="footer__list-item">Reviews</li>
                     </a>
                     <ul>
                     </ul>
                  </ul>
               </div>
               <div class="md:col-4">
                  <ul class="no-bullets">
                     <a href="!#">
                        <li class="footer__list-item">FAQ</li>
                     </a>
                     <a href="!#">
                        <li class="footer__list-item">Help Desk</li>
                     </a>
                     <a href="!#">
                        <li class="footer__list-item">Forums</li>
                     </a>
                     <ul>
                     </ul>
                  </ul>
               </div>
            </div>
         </div>
		 <div class="divider mx-20"></div>
      <div class="u-inline-flex u-gap-1">
         <img class="img-stretch u-center pb-2 hover-grow" style="height: 60px;" src="./static/pic/cat.webp">
         <img class="img-stretch u-center pb-2 hover-grow" style="height: 60px;" src="./static/pic/va.webp">
      </div>
                   <div 
                    x-data="{
                        text: '',
                        textArray : ['valenteer © 2025.'],
                        textIndex: 0,
                        charIndex: 0,
                        typeSpeed: 120,
                        cursorSpeed: 550,
                        pauseEnd: 2000,
                        pauseStart: 40,
                        direction: 'forward',
                    }" 
                    x-init="$nextTick(() => {
                        let typingInterval = setInterval(startTyping, $data.typeSpeed);
                    
                        function startTyping(){
                            let current = $data.textArray[ $data.textIndex ];
                            
                            // check to see if we hit the end of the string
                            if($data.charIndex > current.length){
                                    $data.direction = 'backward';
                                    clearInterval(typingInterval);
                                    
                                    setTimeout(function(){
                                        typingInterval = setInterval(startTyping, $data.typeSpeed);
                                    }, $data.pauseEnd);
                            }   
                                
                            $data.text = current.substring(0, $data.charIndex);
                            
                            if($data.direction == 'forward')
                            {
                                $data.charIndex += 1;
                            } 
                            else 
                            {
                                if($data.charIndex == 0)
                                {
                                    $data.direction = 'forward';
                                    clearInterval(typingInterval);
                                    setTimeout(function(){
                                        $data.textIndex += 1;
                                        if($data.textIndex >= $data.textArray.length)
                                        {
                                            $data.textIndex = 0;
                                        }
                                        typingInterval = setInterval(startTyping, $data.typeSpeed);
                                    }, $data.pauseStart);
                                }
                                $data.charIndex -= 1;
                            }
                        }
                                    
                        setInterval(function(){
                            if($refs.cursor.classList.contains('hidden'))
                            {
                                $refs.cursor.classList.remove('hidden');
                            } 
                            else 
                            {
                                $refs.cursor.classList.add('hidden');
                            }
                        }, $data.cursorSpeed);

                    })">
                    <div class="flex u-center">
                        <p x-text="text"></p>
                    </div>
                </div>
		 
      </footer>
	
	  <!-- ################################################################
         
		 							End footer
         
      ##################################################################-->
	
`);