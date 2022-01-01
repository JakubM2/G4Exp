//I added few templates for later usage...
//just copy div and paste it under previous one

//NEWS TEMPLATE:

<div class="newsPage">
  <h3>TITLE</h3>
  <span>DATE</span>
  <p>MESSAGE</p>
</div>

//CAREERS TEMPLATE:

<div class="careerProposition">
  <h3>POSITION</h3>
  <p>SHORT DESCRIPTION</p>
  <i class="icon-location">LOCATION OF WORK</i>
  <p class="moreInfo" onclick="openCareers(2)">More Info</p>//OPEN A DIV WITH MORE INFO
</div>

//CAREER MORE INFO TEMPLATE:

<div class="careerProposition">
  <h3>POSITION</h3>
  <i class="icon-location">LOCATION</i>
  <p class="shortDescription">SHORT DESCRIPTION</p>
  <h3>RESPONSIBILITIES</h3>
  <ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
  <h3>REQUIREMENTS & SKILLS:</h3>
  <ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
  <button onclick="window.location.href='jobcontact.html?_Senior_Enviroment_Artist'">Join us</button>  //after question mark you need to write underscore and then name of the position separated by undercores between each word.
</div>

//Career Container On the main site - do not use right now ;)

<div class="careersContainer">
      <h2>Careers</h2>
      <p class="careerInfo">Hello! We are Games 4Experience, a brand new VR exclusive studio seeking outstanding talents to join our ranks. We work fully remotely, but if you feel like moving places we offer a beautiful office in a historic centre of Warsaw, Poland.</p>
      <p class="lookingFor">We are currently looking for:</p>      
      <div class="careerProposition">
        <h3>Senior Environment Artist</h3>
        <p class="shortDescription">We are looking for a Senior Environment Artist who will contribute to the development of a next big VR game, utilizing a combination of core art and technical art skills.</p>
        <i class="icon-location">Warsaw / Remote</i>
        <p class="moreInfo"><a href="subpages\careers.html" target="blank">More Info</a></p>
      </div>
      <div class="careerProposition">
        <h3>Junior Software Programmer</h3>
        <p class="shortDescription">We are looking for a Junior Software Programmer who will contribute to the development of a next big VR game, utilizing a combination of core art and technical art skills.</p>
        <i class="icon-location">Remote Only</i>
        <p class="moreInfo"><a href="subpages\careers.html" target="blank">More Info</a></p>
      </div>
      <!--place to paste new div - below this comment-->
    </div>