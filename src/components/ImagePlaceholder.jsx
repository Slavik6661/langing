export default function ImagePlaceholder({
  label,
  src,
  alt,
  ratio = 'aspect-[4/3]',
  className = '',
  imageClassName = '',
}) {
  return (
    <div className={`glass-panel relative w-full max-w-full overflow-hidden rounded-lg ${ratio} ${className}`}>
      {src ? (
        <>
          <img
            src={src}
            alt={alt || label}
            loading="lazy"
            className={`h-full w-full object-cover ${imageClassName}`}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-graphite/72 via-graphite/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(216,181,109,0.18),transparent_34%)]" />
          <div className="absolute inset-4 rounded-md border border-white/10 sm:inset-6" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-premium-radial" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_38%,rgba(216,181,109,0.08))]" />
          <div className="absolute inset-x-5 top-6 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent sm:inset-x-8 sm:top-8" />
          <div className="absolute inset-4 rounded-md border border-white/10 sm:inset-6" />
          <div className="relative flex h-full items-center justify-center p-5 text-center sm:p-8">
            <p className="max-w-md break-words text-xs font-medium leading-6 text-ivory/78 sm:text-base sm:leading-7">
              {label}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
