const Statistic = () => {
  return (
    <>
      {/* Statistics Section: Simple */}
      <div className="bg-white dark:text-gray-100 dark:bg-gray-900">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x dark:divide-gray-700/75">
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-4xl font-extrabold text-black dark:text-white">
                8,600+
              </dt>
              <dd className="text-sm uppercase tracking-wide font-semibold text-blue-600 dark:text-blue-500">
                Projects
              </dd>
            </dl>
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-4xl font-extrabold text-black dark:text-white">
                2,500+
              </dt>
              <dd className="text-sm uppercase tracking-wide font-semibold text-blue-600 dark:text-blue-500">
                Clients
              </dd>
            </dl>
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-4xl font-extrabold text-black dark:text-white">
                760k+
              </dt>
              <dd className="text-sm uppercase tracking-wide font-semibold text-blue-600 dark:text-blue-500">
                Earnings
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {/* END Statistics Section: Simple */}
    </>
  );
};

export default Statistic;
