import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-sm bg-black/50"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-sm top-4 right-4 bg-midnight/80 hover:bg-gray-500"
        >
          <img src="/assets/close.svg" alt="Close" className="w-5 h-5" />
        </button>

        {/* Constrained image height */}
        <img
          src={image}
          alt={title}
          className="w-full max-h-56 object-cover rounded-t-2xl"
        />

        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold text-white">{title}</h5>
          <p className="mb-3 text-sm font-normal text-neutral-400">
            {description}
          </p>
          {subDescription.map((subDesc, index) => (
            <p
              key={index}
              className="mb-2 text-sm font-normal text-neutral-400"
            >
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
            <div className="flex gap-2.5">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-8 hover-animation"
                />
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium cursor-pointer hover-animation"
            >
              View Project{" "}
              <img
                src="/assets/arrow-up.svg"
                alt="Open project"
                className="size-4"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;