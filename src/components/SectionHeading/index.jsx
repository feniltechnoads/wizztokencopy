const SectionHeading = ({
  title,
  text,
  img,
  id,
  ClassSpan = "dream-dots justify-content-center",
  ClassSpanTitle = "",
}) => {
  return (
    <>
      {img ? (
        <div className="section-heading text-center">
          <div className="dream-dots justify-content-center" data-aos="fade-up">
            <img draggable="false" src={img} alt="" />
          </div>
          <h2 data-aos="fade-up" id={id}>
            {title}
          </h2>
          <p data-aos="fade-up">{text}</p>
        </div>
      ) : (
        <div className="section-heading text-center">
          <div className={ClassSpan} data-aos="fade-up">
            <h3>
              <span className={ClassSpanTitle}>{title}</span>
            </h3>
          </div>
          <h2 data-aos="fade-up">{text}</h2>
          {/* <p data-aos="fade-up">Our ICO Template Will Be A Perfect Platform For Presenting Your Ico Launch. This Landing Page Comes In Great And Clean Design</p> */}
        </div>
      )}
    </>
  );
};

export default SectionHeading;
