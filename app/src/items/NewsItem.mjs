import React, { Component } from 'react'

export default class NewsItem extends Component {

  componentDidMount() {
    const newsPreviewArray = document.querySelectorAll('.newsPreview');
    const cardContainerArray = document.querySelectorAll('.cardContainer');
    

    if (!newsPreviewArray || !cardContainerArray)
      return;

    cardContainerArray.forEach((e) => {
      e.addEventListener('mouseover', (event) => {
        const elem = document.querySelector(`#${e.id} .newsPreview`);
        elem.style.height = "94px";
        e.style.backgroundSize = "500px";
        
      })

      e.addEventListener('mouseout', () => {
        const elem = document.querySelector(`#${e.id} .newsPreview`);
        elem.style.height = "0px";
        e.style.backgroundSize = "450px";
      })
    });

  }

  render() {

    const id = this.props.newsId;

    return (
      <>
        <div id={id} className='cardContainer dis-flex ai-flex-end'>

          <div className='newsHeadlineAndFooterContainer'>
            <div className="newsHeadline">
              <div className='newsTitle'>
                Breaking News : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id maiores, atque aspernatur.
              </div>

              <div className="newsPreview">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id cumque exercitationem quis pariatur delectus porro perferendis. Voluptas, impedit inventore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id asperiores obcaecati adipisci iusto voluptate numquam nemo autem cupiditate. Dolorem ea accusantium veniam, sint ducimus voluptates, totam eveniet est blanditiis dolore quas officia sed harum? Quis sequi quisquam maxime nostrum voluptatum velit dolorum repellat voluptate enim.
              </div>
            </div>

            <div className='cardFooter dis-flex ai-center jc-center jc-space-between'>
              <code>11-11-2023</code>
              <code>Author</code>
            </div>
          </div>

        </div>
      </>
    )
  }
}
