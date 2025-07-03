{/* Policies Grid */}
<section className={`py-16 ${currentTheme.bg}`}>
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className={`text-3xl font-bold ${currentTheme.text}`}>
        {selectedCategory === 'all' ? 'Our Comprehensive Policies' : 
         `${categories.find(c => c.id === selectedCategory)?.name}`}
      </h2>
      <div className={`mt-2 w-24 h-1 mx-auto ${currentTheme.accent} rounded-full`}></div>
      <p className={`${currentTheme.text}/70 max-w-2xl mx-auto mt-3`}>
        {selectedCategory === 'all' 
          ? 'Explore our full range of insurance solutions' 
          : `Specialized ${categories.find(c => c.id === selectedCategory)?.name.toLowerCase()} options`}
      </p>
    </div>
    
    {filteredPolicies.length === 0 ? (
      <div className={`text-center py-12 bg-white rounded-xl shadow-sm ${currentTheme.border}`}>
        <p className="text-slate-400">No policies found in this category</p>
      </div>
    ) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ml-10 mr-10">
        {/* ... existing policy cards code ... */}
      </div>
    )}
  </div>
</section>