# Abdull

## html

<div class="profile-img"><img src="images/profile.jpg" alt="profile-img"></div>
<div class="intro-text">
    <h1>Hi, i'm Abdullah Salaudeen</h1>
    <h2>Front-end Developer</h2>
</div>
<div class="social-links">
    <a href="https://github.com/TheOnlyAbdull" class="fa fa-github" aria-hidden="true"></a>
    <a href="https://www.linkedin.com/in/abdullahi-salaudeen-08392a252" class="fa fa-linkedin" aria-hidden="true"></a>
    <a href="mailto:abdullahisalaudeen@gmail.com" class="fa fa-envelope" aria-hidden="true"></a>
    <a href="https://instagram.com/theonlyabdull?igshid=ZmZhODViOGI=" class="fa fa-instagram" aria-hidden="true"></a>
    <a href="https://twitter.com/TheOnlyAbdull?t=kcKxH0wNRouoDtCJ8Akugw&s=09" class="fa fa-twitter"></a>
</div>
<div class="down-arrow">
    <i class="fa fa-angle-double-down" aria-hidden="true"></i>
</div>


## css

.sec-1{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: #1a1a29;
    /* background: yellow; */
}
.profile-img img {
    width: 150px;
    height: 150px;
    display: block;
    border-radius: 100px;
    margin-right: auto;
    margin-left: auto;
}
.intro-text h1{
    font-size: 2.5rem;
    text-align: center;
    margin: 1rem 0 1.2rem 0;
    color:  #f2f1e6;
}
.intro-text h2{
    text-align: center;
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    /* color: #6e57d4; */
    margin-bottom: 1.5rem;
    color:  #7562E0;;
}
.social-links {
    text-align: center;
    margin-bottom: 4rem;
}
.social-links a{
    font-size: 1.8rem;
    padding: 0 0.5rem;
    transition: .5s;
    color: #f2f1e6;
}
.social-links a:hover{
    color:  #7562E0;
}
.down-arrow{
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    color: #f2f1e6;
    z-index: 0;
}
.down-arrow i{
    color: #6e57d4;
}
/* ////////////////////animation///////////////////// */
.down-arrow {
    animation-name: bounce ;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
  }
  
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }