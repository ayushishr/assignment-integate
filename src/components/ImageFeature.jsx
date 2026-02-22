import './ImageFeature.css'

export default function ImageFeature() {
  return (
    <section className="image-feature">
      <div className="image-feature-inner">
        <div className="image-cluster">
          <div className="feature-img feature-img-left">
            <div className="feature-img-bg" />
            <div className="feature-overlay gears" />
            <span className="feature-label">Team collaboration</span>
          </div>
          <div className="feature-img feature-img-right">
            <div className="feature-img-bg feature-img-bg-2" />
            <div className="feature-overlay shield" />
            <span className="feature-label">Security focus</span>
          </div>
        </div>
      </div>
    </section>
  )
}
