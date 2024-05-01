const NotFound = () => {
  console.log("not found");
  return (
    <div className="text-black md:text-2xl text-lg dark:text-white absolute top-0 left-0 h-screen w-screen flex items-center justify-center dark:bg-black">
      404 | Not Found
    </div>
  );
};

export default NotFound;
