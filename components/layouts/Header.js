import Image from 'next/image';
import dynamic from "next/dynamic";

const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
    loading: () => <p>Loading...</p>
  })

const ComponentWithBackgroundImage = ({src,banner_content,breadcrumb}) => {
  return (
    <div className="ps-page__header  breadcrumb-h service-breadcrumb-bg"
     style={{
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '20vh', 
    }}>
      <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1>{banner_content}</h1>
          </div>
    </div>
  );
};

export default ComponentWithBackgroundImage;
