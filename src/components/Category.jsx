
function Category({img, title}) {
  return (
    <div className=" text-center">
        <div className="  p-5 rounded-full bg-gray-200">
            <img src={img} alt="" width={'80px'} height={'80px'}/>
        </div>
        <p style={{textTransform:"capitalize"}}>{title}</p>
    </div>    
  );
}
export default Category