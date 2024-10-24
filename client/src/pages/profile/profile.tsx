import React from 'react'
import Header from '../../components/header/header'
import Container from '../../components/container/container'
import Leftcomponent from '../../components/leftsidecomponent/leftcomponent'
import Mainsection from '../../components/container/section/mainsection'
import Middle from '../../components/container/middlecontainer/middle'

const  Profile:React.FC = () => {
  return (
    
    <Container >
    <Header/>
       <Mainsection>
                <Leftcomponent/>
                <Middle>
                <div className='flex justify-center w-[100%] h-auto mt-[20px] mb-[20px]'>
                           <div className='bg-[#4F4F4F] w-[90%] h-auto rounded-[10px] p-[4%]  '>
                               <div className='bg-[#212121] h-[200px] rounded-xl'>
                                    <div className='flex flex-col items-center pt-[5%]'>
                                      <img className='w-[20%]' src="../../../public//john 1.png" alt="" />
                                      <div className='text-[#ffff]'>user 1</div>
                                    </div>
                               </div>
                               <div>
                                    <div className='text-[#ffff]'>Edit profile</div>
                                    <div className='flex items-center gap-[2%;] mt-[2%] mb-[2%]'>
                                      <div><svg width="15" height="15" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.5 3.9375C32.1188 3.9375 32.625 4.52812 32.625 5.25V31.4836L32.2734 30.9504L22.7109 16.5129C22.3945 16.0289 21.8953 15.75 21.375 15.75C20.8547 15.75 20.3625 16.0289 20.0391 16.5129L14.2031 25.323L12.0586 21.8203C11.7422 21.3035 11.2359 21 10.6875 21C10.1391 21 9.63281 21.3035 9.31641 21.8285L3.69141 31.016L3.375 31.5246V31.5V5.25C3.375 4.52812 3.88125 3.9375 4.5 3.9375H31.5ZM4.5 0C2.01797 0 0 2.3543 0 5.25V31.5C0 34.3957 2.01797 36.75 4.5 36.75H31.5C33.982 36.75 36 34.3957 36 31.5V5.25C36 2.3543 33.982 0 31.5 0H4.5ZM10.125 15.75C10.5682 15.75 11.0071 15.6482 11.4166 15.4503C11.826 15.2524 12.1981 14.9624 12.5115 14.5967C12.8249 14.2311 13.0735 13.797 13.2431 13.3193C13.4127 12.8416 13.5 12.3296 13.5 11.8125C13.5 11.2954 13.4127 10.7834 13.2431 10.3057C13.0735 9.82796 12.8249 9.3939 12.5115 9.02827C12.1981 8.66264 11.826 8.3726 11.4166 8.17472C11.0071 7.97685 10.5682 7.875 10.125 7.875C9.68179 7.875 9.24292 7.97685 8.83344 8.17472C8.42397 8.3726 8.05191 8.66264 7.73851 9.02827C7.42512 9.3939 7.17652 9.82796 7.00691 10.3057C6.8373 10.7834 6.75 11.2954 6.75 11.8125C6.75 12.3296 6.8373 12.8416 7.00691 13.3193C7.17652 13.797 7.42512 14.2311 7.73851 14.5967C8.05191 14.9624 8.42397 15.2524 8.83344 15.4503C9.24292 15.6482 9.68179 15.75 10.125 15.75Z" fill="white"/></svg></div>
                                      <div className='text-[#ffff]'>Change Profile Picture</div>
                                    </div>
                                    <div className='flex items-center gap-[2%;]'>
                                      <div><svg width="15" height="15" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.5 3.9375C32.1188 3.9375 32.625 4.52812 32.625 5.25V31.4836L32.2734 30.9504L22.7109 16.5129C22.3945 16.0289 21.8953 15.75 21.375 15.75C20.8547 15.75 20.3625 16.0289 20.0391 16.5129L14.2031 25.323L12.0586 21.8203C11.7422 21.3035 11.2359 21 10.6875 21C10.1391 21 9.63281 21.3035 9.31641 21.8285L3.69141 31.016L3.375 31.5246V31.5V5.25C3.375 4.52812 3.88125 3.9375 4.5 3.9375H31.5ZM4.5 0C2.01797 0 0 2.3543 0 5.25V31.5C0 34.3957 2.01797 36.75 4.5 36.75H31.5C33.982 36.75 36 34.3957 36 31.5V5.25C36 2.3543 33.982 0 31.5 0H4.5ZM10.125 15.75C10.5682 15.75 11.0071 15.6482 11.4166 15.4503C11.826 15.2524 12.1981 14.9624 12.5115 14.5967C12.8249 14.2311 13.0735 13.797 13.2431 13.3193C13.4127 12.8416 13.5 12.3296 13.5 11.8125C13.5 11.2954 13.4127 10.7834 13.2431 10.3057C13.0735 9.82796 12.8249 9.3939 12.5115 9.02827C12.1981 8.66264 11.826 8.3726 11.4166 8.17472C11.0071 7.97685 10.5682 7.875 10.125 7.875C9.68179 7.875 9.24292 7.97685 8.83344 8.17472C8.42397 8.3726 8.05191 8.66264 7.73851 9.02827C7.42512 9.3939 7.17652 9.82796 7.00691 10.3057C6.8373 10.7834 6.75 11.2954 6.75 11.8125C6.75 12.3296 6.8373 12.8416 7.00691 13.3193C7.17652 13.797 7.42512 14.2311 7.73851 14.5967C8.05191 14.9624 8.42397 15.2524 8.83344 15.4503C9.24292 15.6482 9.68179 15.75 10.125 15.75Z" fill="white"/></svg></div>
                                      <div className='text-[#ffff]'>Change Cover Picture</div>
                                    </div>
                              </div>
                           </div>
                        </div>
                <div className='flex justify-center w-[100%] h-auto'>
                           <div className='bg-[#4F4F4F] w-[90%] h-auto rounded-[10px] p-[3%]'>
                                <div className='flex justify-center gap-[7%] mb-[2%]'>
                                  <div className='w-[40px] h-[40px] bg-[#D9D9D9] rounded-full'></div>
                                  <input placeholder='Create new post' type="text" className='bg-[#212121] rounded-xl p-[0_17px] w-[64%] text-[#ffff]' />
                                  <div>
                                    <svg width="35" height="35" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.375 7.03125C40.1484 7.03125 40.7812 7.66406 40.7812 8.4375V36.5449L40.3418 35.9736L28.3887 20.5049C27.9932 19.9863 27.3691 19.6875 26.7188 19.6875C26.0684 19.6875 25.4531 19.9863 25.0488 20.5049L17.7539 29.9443L15.0732 26.1914C14.6777 25.6377 14.0449 25.3125 13.3594 25.3125C12.6738 25.3125 12.041 25.6377 11.6455 26.2002L4.61426 36.0439L4.21875 36.5889V36.5625V8.4375C4.21875 7.66406 4.85156 7.03125 5.625 7.03125H39.375ZM5.625 2.8125C2.52246 2.8125 0 5.33496 0 8.4375V36.5625C0 39.665 2.52246 42.1875 5.625 42.1875H39.375C42.4775 42.1875 45 39.665 45 36.5625V8.4375C45 5.33496 42.4775 2.8125 39.375 2.8125H5.625ZM12.6562 19.6875C13.2103 19.6875 13.7589 19.5784 14.2707 19.3664C14.7825 19.1544 15.2476 18.8436 15.6394 18.4519C16.0311 18.0601 16.3419 17.595 16.5539 17.0832C16.7659 16.5714 16.875 16.0228 16.875 15.4688C16.875 14.9147 16.7659 14.3661 16.5539 13.8543C16.3419 13.3425 16.0311 12.8774 15.6394 12.4856C15.2476 12.0939 14.7825 11.7831 14.2707 11.5711C13.7589 11.3591 13.2103 11.25 12.6562 11.25C12.1022 11.25 11.5536 11.3591 11.0418 11.5711C10.53 11.7831 10.0649 12.0939 9.67314 12.4856C9.2814 12.8774 8.97064 13.3425 8.75863 13.8543C8.54662 14.3661 8.4375 14.9147 8.4375 15.4688C8.4375 16.0228 8.54662 16.5714 8.75863 17.0832C8.97064 17.595 9.2814 18.0601 9.67314 18.4519C10.0649 18.8436 10.53 19.1544 11.0418 19.3664C11.5536 19.5784 12.1022 19.6875 12.6562 19.6875Z" fill="white"/></svg>
                                  </div>
                                </div>
                                <div className='flex ml-[3%]'>
                                  <button className = "text-[13px] w-[35%] h-[31px] bg-white rounded-xl">Add new post</button>
                                </div>
                           </div>
                        </div>
                        
                        
                        
                   </Middle>
                   <div className='w-[25%] h-full '></div>
       </Mainsection>
     </Container>           
  
  )
}

export default Profile