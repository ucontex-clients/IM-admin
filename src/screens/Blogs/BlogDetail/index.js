import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

export function BlogDetail(){
    return(
        <div>
            <div style={{marginTop:'48px'}} className={styles.myProperty}>
                <p>Blog <span style={{marginLeft:'51px', fontSize:'15px'}}>Read more</span></p>
                <input type='text' placeholder='Search by name'></input>
            </div>
            <section>
                <div className={styles.detailImage}><Image src='/images/blogImage.png' width={372} height={378} alt='blog-cover'/></div>
                <div className={styles.adminDate}>
                    <p>By Admin</p>
                    <p>June 10 2022</p>
                </div>
            </section>
            <section className={styles.readDetail}>
                <p>10 ways to build a way without borrowing money</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                    metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                    tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                    lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                    per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
                    scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl,
                    eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam
                    sit amet lacinia. Aliquam in elementum tellus.
              Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a
              convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
              Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a
              eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
              Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis
              sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem
              condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
              posuere leo.
                </p>
            </section>
            <div className={styles.postHolder}><button>Post</button></div>
        </div>
    )
}