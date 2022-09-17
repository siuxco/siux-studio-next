import { Button } from './Button.jsx'

const styles = {
  card: {
    main: 'background-white display-flex align-items-center cursor-pointer padding-s tablet:padding-m flex-grow-1 border-radius-xs margin-m box-shadow-xs hover:box-shadow-s',
    title: 'margin-bottom-s color-black font-size-m font-weight-600',
    content: 'margin-top-xs color-neutral-7 line-height-m',
    iconAction: 'icon-system-arrow-right-s-line font-size-xxl margin-left-s color-neutral-3',
  },
}

const Card = (props) => {
  const { title, url, description } = props.link;
  return (
    <a href={url}
      className={styles.card.main}
      style={{ maxWidth: '300px' }}
    >
      <div>
        <h2 className={styles.card.title}>{title}</h2>
        <p className={styles.card.content}>{description}</p>
      </div>
      <i className={styles.card.iconAction}/>
    </a>
  )
}

export { Card }