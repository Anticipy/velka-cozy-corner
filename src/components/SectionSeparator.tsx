const SectionSeparator = () => {
  return (
    <div className="relative py-8 bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Center line with decorative elements */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 bg-muted/40 rounded-full"></div>
          <div className="w-16 h-px bg-muted/30"></div>
          <div className="w-3 h-3 bg-muted/20 rounded-full"></div>
          <div className="w-16 h-px bg-muted/30"></div>
          <div className="w-2 h-2 bg-muted/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeparator;
