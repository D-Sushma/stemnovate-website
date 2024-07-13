// backend data 
coupons  = [
    {
      coupon_id: 7,
      coupon_code: 'Test-Demo',
      discount_type: 'Percentage',
      expiry_date: 2023-11-26T00:00:00.000Z,
      discount: 10.02
    },
    {
      coupon_id: 9,
      coupon_code: 'Get10',
      discount_type: 'Fixed',
      expiry_date: 2023-11-29T00:00:00.000Z,
      discount: 0.05
    }
  ]
  
  // to learn fetch data from axios
  const fetchData = async () => {
    try {
      const response = await axios.get(
        '/api/coupons/getCoupons',
        {
          coupon_id: 7,
        }
      );
      const data = response;
  
      if (response.code === 200) {
        setCoupons(data.result);
      } else {
        console.error(`Error=====>`);
        // console.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // getCoupon =====>
  const fetchData = async ()=>{
    try{
      const response = await axios.get('/api/coupons/getCoupons')
      console.log("response====", response.data);
      setCoupons(response.data);
    }catch(error){
      console.log("error",error)
    }
  } 
  // OR
  const fetchData =  ()=>{
    try{
      const response =  axios.get('/api/coupons/getCoupons')
      .then((response)=>{
        console.log("response====",response)
        setCoupons(response.data);
      })
    }catch(error){
      console.log("error",error)
    }
  }
  
  
  // for coupon BothFormCheckout.jsx
  import CouponFormSystem from "./CouponFormSystem"
  import {
    calculateAmount,
    calculateShipping,
    calculatePercentage,
    calculateTotalDiscount
  } from "~/utilities/ecomerce-helpers"
  
  function BothFormCheckout({ ecomerce, userStatus, UserData }) {
    const [couponDiscount,setCouponDiscount] = useState([])
  
    let discount= '0.00',discountType=''
    couponDiscount.forEach(item => {
      discount = item?.discount;
      discountType = item?.discount_type;
    });
    console.log("Discount,DiscountType",discount,discountType)
  
    let cartItemsView,
      maxShippingCost,
      allTotal,
      percentage,
      withVAT,
      totalDiscount = "0.00",
      // totalDiscount = discount,
      amountView = "0.00"
    if (products && products.length > 0) {
      amountView = calculateAmount(products)
      maxShippingCost = calculateShipping(products)
      if (deliveryAdd == "cambridge" || deliveryAdd == "Cambridge") {
        maxShippingCost = parseFloat(0)
      }
      allTotal = parseFloat(amountView) + parseFloat(maxShippingCost)
      percentage = calculatePercentage(20, allTotal)
      if(discountType == "Percentage"){
        totalDiscount = calculateTotalDiscount(discount, allTotal)
        withVAT = parseFloat(allTotal) + parseFloat(percentage) - parseFloat(totalDiscount)
      }else if((discountType == "Fixed")){
        totalDiscount = discount
        withVAT = parseFloat(allTotal) + parseFloat(percentage) - parseFloat(totalDiscount)
      }else{
        withVAT = parseFloat(allTotal) + parseFloat(percentage) - parseFloat(totalDiscount)
      }
  
      cartItemsView = products.map((item) => (
        <div className="ps-checkout__row ps-product" key={item.id}>
          <div className="ps-product__name">
            <span>{item.product_name}</span> x <span>{item.quantity}</span>
          </div>
          <div className="ps-product__price">£{item.price}</div>
        </div>
      ))
    } else {
      amountView = "0.00"
      maxShippingCost = "0.00"
      allTotal = "0.00"
      percentage = "0.00"
      withVAT = "0.00"
      totalDiscount = "0.00"
    }
  
    const handleCouponExistChange = (exist) => {
      setCouponDiscount(exist)
    }
    console.log("couponDiscount====>",couponDiscount)
      return (
        <>
          <div className="row">
            <div className="col-12">
              <CouponFormSystem onCouponExistChange = {handleCouponExistChange}/>
            </div>
  
            <div className="ps-checkout__row">
                <div className="ps-title">Total Discount</div>
                <div className="ps-product__price">- £ {totalDiscount}</div>
              </div>
          </div>
        </>
      )
    }
  
    export default connect((state) => state)(BothFormCheckout)
  
  //  logic if coupon applied once than next time coupon already applied message
    // if (!couponAppliedOnce) {
        //   toast.success(`Coupon code "${couponCode}" already exists.`)
        //   setApplied(true)
        //   setCouponAppliedOnce(true)
        // } else {
        //   setCouponAppliedOnce(false)
        //   toast.info(`Coupon code "${couponCode}" already applied `)
        // }
  
  
  //  this code for send data one page to another by helping button click
        const handleProceedToCheckout = () => {
          // Assuming you have a function to handle the navigation to the checkout page
          // and passing the discount data as query parameters
          router.push({
            pathname: "/shop/checkout",
            query: {
              discount: discount,
              discountType: discountType,
              // Add other discount-related data as needed
            },
          });
        };
  // =======================================================================================================
  // shipping cost data
  shippingCost [
    {
      id: 7,
      country_name: 'United Kingdom',
      shipping_cost: 50,
      country_region: 'England',
      delivery_type: 'Live',
      created_at: 2022-04-13T08:02:37.000Z,
      deleted_at: 2022-04-13T08:02:37.000Z
    },
    {
      id: 8,
      country_name: 'India',
      shipping_cost: 300,
      country_region: null,
      delivery_type: null,
      created_at: 2022-04-13T08:03:55.000Z,
      deleted_at: 2022-04-13T08:03:55.000Z
    },
    {
      id: 9,
      country_name: 'Germany',
      shipping_cost: 200,
      country_region: null,
      delivery_type: null,
      created_at: 2022-04-13T11:48:58.000Z,
      deleted_at: 2022-04-13T11:48:58.000Z
    },
    {
      id: 10,
      country_name: 'United Republic of Tanzania ',
      shipping_cost: 100,
      country_region: null,
      delivery_type: null,
      created_at: 2022-06-01T06:59:30.000Z,
      deleted_at: 2022-06-01T06:59:30.000Z
    },
    {
      id: 11,
      country_name: 'Germany',
      shipping_cost: 400,
      country_region: null,
      delivery_type: null,
      created_at: 2022-06-01T07:02:53.000Z,
      deleted_at: 2022-06-01T07:02:53.000Z
    },
    {
      id: 19,
      country_name: 'Japan',
      shipping_cost: 600,
      country_region: '',
      delivery_type: 'Frozen',
      created_at: 2023-11-27T12:51:21.000Z,
      deleted_at: 2023-11-27T12:51:21.000Z
    }
  ]
  
  // regions data
  countyRegion [
    { Id: 1, Regions: 'England', Counties: 'Bedfordshire' },
    { Id: 2, Regions: 'England', Counties: 'Berkshire' },
    { Id: 3, Regions: 'England', Counties: 'Bristol' },
    { Id: 4, Regions: 'England', Counties: 'Buckinghamshire' },
    { Id: 5, Regions: 'England', Counties: 'Cambridgeshire' },
    { Id: 6, Regions: 'England', Counties: 'Cheshire' },
    { Id: 7, Regions: 'England', Counties: 'Cornwall' },
    { Id: 8, Regions: 'England', Counties: 'County Durham' },
    { Id: 9, Regions: 'England', Counties: 'Cumbria' },
    { Id: 10, Regions: 'England', Counties: 'Derbyshire' },
    { Id: 11, Regions: 'England', Counties: 'Devon' },
    { Id: 12, Regions: 'England', Counties: 'Dorset' },
    { Id: 13, Regions: 'England', Counties: 'East Riding of Yorkshire' },
    { Id: 14, Regions: 'England', Counties: 'East Sussex' },
    { Id: 15, Regions: 'England', Counties: 'Essex' },
    { Id: 16, Regions: 'England', Counties: 'Gloucestershire' },
    { Id: 17, Regions: 'England', Counties: 'Greater London' },
    { Id: 18, Regions: 'England', Counties: 'Greater Manchester' },
    { Id: 19, Regions: 'England', Counties: 'Hampshire' },
    { Id: 20, Regions: 'England', Counties: 'Herefordshire' },
    { Id: 21, Regions: 'England', Counties: 'Hertfordshire' },
    { Id: 22, Regions: 'England', Counties: 'Isle of Wight' },
    { Id: 23, Regions: 'England', Counties: 'Kent' },
    { Id: 24, Regions: 'England', Counties: 'Lancashire' },
    { Id: 25, Regions: 'England', Counties: 'Leicestershire' },
    { Id: 26, Regions: 'England', Counties: 'Lincolnshire' },
    { Id: 27, Regions: 'England', Counties: 'Merseyside' },
    { Id: 28, Regions: 'England', Counties: 'Norfolk' },
    { Id: 29, Regions: 'England', Counties: 'North Somerset' },
    { Id: 30, Regions: 'England', Counties: 'North Yorkshire' },
    { Id: 31, Regions: 'England', Counties: 'Northamptonshire' },
    { Id: 32, Regions: 'England', Counties: 'Northumberland' },
    { Id: 33, Regions: 'England', Counties: 'Nottinghamshire' },
    { Id: 34, Regions: 'England', Counties: 'Oxfordshire' },
    { Id: 35, Regions: 'England', Counties: 'Rutland' },
    { Id: 36, Regions: 'England', Counties: 'Shropshire' },
    { Id: 37, Regions: 'England', Counties: 'Somerset' },
    { Id: 38, Regions: 'England', Counties: 'South Gloucestershire' },
    { Id: 39, Regions: 'England', Counties: 'South Yorkshire' },
    { Id: 40, Regions: 'England', Counties: 'Staffordshire' },
    { Id: 41, Regions: 'England', Counties: 'Suffolk' },
    { Id: 42, Regions: 'England', Counties: 'Surrey' },
    { Id: 43, Regions: 'England', Counties: 'Tyne & Wear' },
    { Id: 44, Regions: 'England', Counties: 'Warwickshire' },
    { Id: 45, Regions: 'England', Counties: 'West Midlands' },
    { Id: 46, Regions: 'England', Counties: 'West Sussex' },
    { Id: 47, Regions: 'England', Counties: 'West Yorkshire' },
    { Id: 48, Regions: 'England', Counties: 'Wiltshire' },
    { Id: 49, Regions: 'England', Counties: 'Worcestershire' },
    { Id: 50, Regions: 'Scotland', Counties: 'Aberdeenshire' },
    { Id: 51, Regions: 'Scotland', Counties: 'Angus' },
    { Id: 52, Regions: 'Scotland', Counties: 'Argyll & Bute' },
    { Id: 53, Regions: 'Scotland', Counties: 'Ayrshire' },
    { Id: 54, Regions: 'Scotland', Counties: 'Banffshire' },
    { Id: 55, Regions: 'Scotland', Counties: 'Berwickshire' },
    { Id: 56, Regions: 'Scotland', Counties: 'Borders' },
    { Id: 57, Regions: 'Scotland', Counties: 'Caithness' },
    { Id: 58, Regions: 'Scotland', Counties: 'Clackmannanshire' },
    { Id: 59, Regions: 'Scotland', Counties: 'Dumfries & Galloway' },
    { Id: 60, Regions: 'Scotland', Counties: 'Dunbartonshire' },
    { Id: 61, Regions: 'Scotland', Counties: 'East Ayrshire' },
    { Id: 62, Regions: 'Scotland', Counties: 'East Dunbartonshire' },
    { Id: 63, Regions: 'Scotland', Counties: 'East Lothian' },
    { Id: 64, Regions: 'Scotland', Counties: 'East Renfrewshire' },
    { Id: 65, Regions: 'Scotland', Counties: 'Fife' },
    { Id: 66, Regions: 'Scotland', Counties: 'Highland' },
    { Id: 67, Regions: 'Scotland', Counties: 'Inverclyde' },
    { Id: 68, Regions: 'Scotland', Counties: 'Kincardineshire' },
    { Id: 69, Regions: 'Scotland', Counties: 'Lanarkshire' },
    { Id: 70, Regions: 'Scotland', Counties: 'Midlothian' },
    { Id: 71, Regions: 'Scotland', Counties: 'Moray' },
    { Id: 72, Regions: 'Scotland', Counties: 'North Ayrshire' },
    { Id: 73, Regions: 'Scotland', Counties: 'North Lanarkshire' },
    { Id: 74, Regions: 'Scotland', Counties: 'Orkney' },
    { Id: 75, Regions: 'Scotland', Counties: 'Perth & Kinross' },
    { Id: 76, Regions: 'Scotland', Counties: 'Renfrewshire' },
    { Id: 77, Regions: 'Scotland', Counties: 'Shetland' },
    { Id: 78, Regions: 'Scotland', Counties: 'South Ayrshire' },
    { Id: 79, Regions: 'Scotland', Counties: 'South Lanarkshire' },
    { Id: 80, Regions: 'Scotland', Counties: 'Stirlingshire' },
    { Id: 81, Regions: 'Scotland', Counties: 'West Dunbartonshire' },
    { Id: 82, Regions: 'Scotland', Counties: 'West Lothian' },
    { Id: 83, Regions: 'Scotland', Counties: 'Western Isles' },
    { Id: 84, Regions: 'Wales', Counties: 'Blaenau Gwent' },
    { Id: 85, Regions: 'Wales', Counties: 'Bridgend' },
    { Id: 86, Regions: 'Wales', Counties: 'Caerphilly' },
    { Id: 87, Regions: 'Wales', Counties: 'Cardiff' },
    { Id: 88, Regions: 'Wales', Counties: 'Carmarthenshire' },
    { Id: 89, Regions: 'Wales', Counties: 'Ceredigion' },
    { Id: 90, Regions: 'Wales', Counties: 'Conwy' },
    { Id: 91, Regions: 'Wales', Counties: 'Denbighshire' },
    { Id: 92, Regions: 'Wales', Counties: 'Flintshire' },
    { Id: 93, Regions: 'Wales', Counties: 'Gwynedd' },
    { Id: 94, Regions: 'Wales', Counties: 'Isle of Anglesey' },
    { Id: 95, Regions: 'Wales', Counties: 'Merthyr Tydfil' },
    { Id: 96, Regions: 'Wales', Counties: 'Monmouthshire' },
    { Id: 97, Regions: 'Wales', Counties: 'Neath Port Talbot' },
    { Id: 98, Regions: 'Wales', Counties: 'Newport' },
    { Id: 99, Regions: 'Wales', Counties: 'Pembrokeshire' },
    { Id: 100, Regions: 'Wales', Counties: 'Powys' },
    ... 11 more items
  ]
  
  
  // backend data customer detail
  customerDetail [
    {
      id: 1,
      add_id: 'e241f4a4-dce5-4db0-a582-2ca503e13ead',
      customer_id: 13,
      B_First: 'Rajeshwar',
      B_last: null,
      B_Email: 'work.rjkashyap5@gmail.com',
      B_PhoneNumber: '900000000',
      B_SameAsOrg: null,
      B_Country: 'India',
      B_County: 'cambridge',
      B_Town: 'Durg',
      B_ZIP: '491001',
      B_Address1: 'Durg',
      B_Address2: '',
      S_First: 'Rajeshwar',
      S_last: null,
      S_Email: 'work.rjkashyap5@gmail.com',
      S_PhoneNumber: '9000000000',
      S_SameAsOrg: false,
      S_Country: 'India',
      S_County: 'Chhattisgarh',
      S_Town: 'Durg',
      S_ZIP: '491001',
      S_Address1: 'Durg',
      S_Address2: 'Durg'
    },
    {
      id: 2,
      add_id: '8b2d473b-b597-4ba4-a560-0bd89afb6544',
      customer_id: 14,
      B_First: 'Abigail',
      B_last: 'Parnell',
      B_Email: 'abi.parnell@stemnovate.co.uk',
      B_PhoneNumber: '01223 830192',
      B_SameAsOrg: true,
      B_Country: null,
      B_County: null,
      B_Town: null,
      B_ZIP: null,
      B_Address1: null,
      B_Address2: null,
      S_First: 'Abigail',
      S_last: 'Parnell',
      S_Email: 'abi.parnell@stemnovate.co.uk',
      S_PhoneNumber: '01223 830192',
      S_SameAsOrg: true,
      S_Country: null,
      S_County: null,
      S_Town: null,
      S_ZIP: null,
      S_Address1: null,
      S_Address2: null
    },
    {
      id: 3,
      add_id: '27487f18-6834-4e23-a186-4a4b7cff2ce5',
      customer_id: 20,
      B_First: 'Vivek',
      B_last: 'Mahant',
      B_Email: 'vivek.mahant@stemnovate.co.uk',
      B_PhoneNumber: '1276377673',
      B_SameAsOrg: false,
      B_Country: 'United Kingdom',
      B_County: 'Cambridgeshire',
      B_Town: 'CAMBRIDGE',
      B_ZIP: 'CB3 0GT',
      B_Address1: '3, Charles Babbage Road',
      B_Address2: '',
      S_First: 'Vivek',
      S_last: 'Mahant',
      S_Email: 'vivek.mahant@stemnovate.co.uk',
      S_PhoneNumber: '01234567890',
      S_SameAsOrg: false,
      S_Country: 'United Kingdom',
      S_County: 'Cambridgeshire',
      S_Town: 'CAMBRIDGE',
      S_ZIP: 'CB3 0GT',
      S_Address1: '3, Charles Babbage Road',
      S_Address2: ''
    },
    {
      id: 4,
      add_id: '30c87de4-06ec-4b3e-8d99-6a9175371e6e',
      customer_id: 18,
      B_First: 'Rajeshwar',
      B_last: 'Kashyap',
      B_Email: 'work.rjkashyap05@gmail.com',
      B_PhoneNumber: '9009889262',
      B_SameAsOrg: false,
      B_Country: 'India',
      B_County: 'Cambridge',
      B_Town: 'sfsdg',
      B_ZIP: '491001',
      B_Address1: 'Mashal chowk',
      B_Address2: '',
      S_First: 'Rajeshwar',
      S_last: 'Kashyap',
      S_Email: 'work.rjkashyap5@gmail.com',
      S_PhoneNumber: '9009889262',
      S_SameAsOrg: false,
      S_Country: 'India',
      S_County: 'Chhatishgarh',
      S_Town: 'Durg',
      S_ZIP: '491001',
      S_Address1: 'Mashal chowk',
      S_Address2: ''
    },
    {
      id: 5,
      add_id: '85ba5ed6-5e52-43b8-849d-d7d838fbdf80',
      customer_id: 22,
      B_First: 'Rajeshwar',
      B_last: 'Kas',
      B_Email: 'work.rjkashyap05@gmail.com',
      B_PhoneNumber: '9009889262',
      B_SameAsOrg: false,
      B_Country: 'India',
      B_County: 'Columbia',
      B_Town: 'Town / City',
      B_ZIP: 'Postcode / ZIP',
      B_Address1: 'Address line 1',
      B_Address2: 'Address line',
      S_First: 'Rajeshwar',
      S_last: 'Kashyap',
      S_Email: 'work.rjkashyap05@gmail.com',
      S_PhoneNumber: '9009889262',
      S_SameAsOrg: false,
      S_Country: 'India',
      S_County: 'Organization',
      S_Town: 'Town / City',
      S_ZIP: 'Postcode / ZIP',
      S_Address1: 'Address line 1',
      S_Address2: 'Address line 2'
    },
    {
      id: 6,
      add_id: '4a7503eb-5e00-4dcf-a61f-2c8b9a416b77',
      customer_id: 28,
      B_First: 'Testing 13',
      B_last: 'Mah',
      B_Email: 'hywyvir@vomoto.com',
      B_PhoneNumber: '1233449492',
      B_SameAsOrg: true,
      B_Country: 'United Kingdom',
      B_County: 'Cambridgshire',
      B_Town: 'London',
      B_ZIP: 'CB124t',
      B_Address1: '22 State Willow',
      B_Address2: null,
      S_First: 'Testing 13',
      S_last: 'Mah',
      S_Email: 'hywyvir@vomoto.com',
      S_PhoneNumber: '123339292',
      S_SameAsOrg: true,
      S_Country: 'United Kingdom',
      S_County: 'Cambridgshire',
      S_Town: 'London',
      S_ZIP: 'CB124t',
      S_Address1: '22 State Willow',
      S_Address2: null
    },
    {
      id: 7,
      add_id: '5f7c73a4-49e4-4af0-be71-48487058f47a',
      customer_id: 30,
      B_First: 'Test05Jun2022',
      B_last: 'Third',
      B_Email: 'sojotaze@givmail.com',
      B_PhoneNumber: '123334',
      B_SameAsOrg: true,
      B_Country: 'United Kingdom',
      B_County: null,
      B_Town: null,
      B_ZIP: null,
      B_Address1: null,
      B_Address2: null,
      S_First: 'Test05Jun2022',
      S_last: 'Third',
      S_Email: 'sojotaze@givmail.com',
      S_PhoneNumber: '233433',
      S_SameAsOrg: true,
      S_Country: 'United Kingdom',
      S_County: null,
      S_Town: null,
      S_ZIP: null,
      S_Address1: null,
      S_Address2: null
    },
    {
      id: 8,
      add_id: '2d7d04f7-de81-4b1a-937a-64c89b02a9b4',
      customer_id: 31,
      B_First: 'Testiser',
      B_last: 'Fivd',
      B_Email: 'nywaku@vomoto.com',
      B_PhoneNumber: '1273747473',
      B_SameAsOrg: true,
      B_Country: 'United Kingdom',
      B_County: 'Cambridgeshire ',
      B_Town: 'Edinburgh ',
      B_ZIP: 'Eh153dj',
      B_Address1: '22 astinh',
      B_Address2: null,
      S_First: 'Testiser',
      S_last: 'Fivd',
      S_Email: 'nywaku@vomoto.com',
      S_PhoneNumber: '1737373',
      S_SameAsOrg: true,
      S_Country: 'United Kingdom',
      S_County: 'Cambridgeshire ',
      S_Town: 'Edinburgh ',
      S_ZIP: 'Eh153dj',
      S_Address1: '22 astinh',
      S_Address2: null
    },
    {
      id: 9,
      add_id: 'ead02608-75e6-400f-9865-e92ee711e543',
      customer_id: 32,
      B_First: 'Tehxjsk',
      B_last: 'Ndjxn',
      B_Email: 'jycifupo@boximail.com',
      B_PhoneNumber: '12282',
      B_SameAsOrg: true,
      B_Country: 'United Kingdom',
      B_County: null,
      B_Town: null,
      B_ZIP: null,
      B_Address1: null,
      B_Address2: null,
      S_First: 'Tehxjsk',
      S_last: 'Ndjxn',
      S_Email: 'jycifupo@boximail.com',
      S_PhoneNumber: '484838',
      S_SameAsOrg: true,
      S_Country: 'United Kingdom',
      S_County: null,
      S_Town: null,
      S_ZIP: null,
      S_Address1: null,
      S_Address2: null
    },
    {
      id: 10,
      add_id: '2707d180-2fd1-4046-9a70-4a93e70bc88d',
      customer_id: 35,
      B_First: 'Test1233',
      B_last: 'Mah',
      B_Email: 'zizoqu@givmail.com',
      B_PhoneNumber: '3434343',
      B_SameAsOrg: true,
      B_Country: 'United Kingdom',
      B_County: null,
      B_Town: null,
      B_ZIP: null,
      B_Address1: null,
      B_Address2: null,
      S_First: 'Test1233',
      S_last: 'Mah',
      S_Email: 'zizoqu@givmail.com',
      S_PhoneNumber: '122333334',
      S_SameAsOrg: true,
      S_Country: 'United Kingdom',
      S_County: null,
      S_Town: null,
      S_ZIP: null,
      S_Address1: null,
      S_Address2: null
    },
    {
      id: 11,
      add_id: 'dc3dcec9-79b1-479a-8489-e341b901131c',
      customer_id: 12,
      B_First: 'Ruchi',
      B_last: 'Sharma',
      B_Email: 'vivek.mahant@gmail.com',
      B_PhoneNumber: '07865928070',
      B_SameAsOrg: true,
      B_Country: 'United Kingdom',
      B_County: 'Cambridgeshire',
      B_Town: 'CAMBRIDGE',
      B_ZIP: 'CB23 6AU',
      B_Address1: '49 LANCASTER GATE',
      B_Address2: 'UPPER CAMBOURNE',
      S_First: 'Vivek',
      S_last: 'Mahant',
      S_Email: 'vivek.mahant@gmail.com',
      S_PhoneNumber: '12344545',
      S_SameAsOrg: true,
      S_Country: 'United Kingdom',
      S_County: 'Cambridgeshire',
      S_Town: 'CAMBRIDGE',
      S_ZIP: 'CB23 6AU',
      S_Address1: '49 LANCASTER GATE',
      S_Address2: 'UPPER CAMBOURNE'
    },
    {
      id: 12,
      add_id: 'b96f2987-7c02-4b40-b108-1a2878dee009',
      customer_id: 41,
      B_First: 'Testing 1',
      B_last: 'Sharma',
      B_Email: 'sufyh@robot-mail.com',
      B_PhoneNumber: '1234455',
      B_SameAsOrg: true,
      B_Country: 'Germany',
      B_County: null,
      B_Town: null,
      B_ZIP: null,
      B_Address1: null,
      B_Address2: null,
      S_First: 'Testing 1',
      S_last: 'Sharma',
      S_Email: 'sufyh@robot-mail.com',
      S_PhoneNumber: '123333',
      S_SameAsOrg: true,
      S_Country: 'Germany',
      S_County: null,
      S_Town: null,
      S_ZIP: null,
      S_Address1: null,
      S_Address2: null
    },
    {
      id: 13,
      add_id: '24842799-2134-4471-8fb0-c3ee77fcf0e6',
      customer_id: 42,
      B_First: 'rj test',
      B_last: 'test',
      B_Email: 'jogixe8992@exoacre.com',
      B_PhoneNumber: '98765435644',
      B_SameAsOrg: true,
      B_Country: 'Pakistan',
      B_County: 'isalamabad',
      B_Town: 'iaslabad',
      B_ZIP: '4567865',
      B_Address1: 'main gali ',
      B_Address2: 'mail gali two',
      S_First: 'rj test',
      S_last: 'test',
      S_Email: 'jogixe8992@exoacre.com',
      S_PhoneNumber: '87654323',
      S_SameAsOrg: true,
      S_Country: 'Pakistan',
      S_County: 'isalamabad',
      S_Town: 'iaslabad',
      S_ZIP: '4567865',
      S_Address1: 'main gali ',
      S_Address2: 'mail gali two'
    },
    {
      id: 14,
      add_id: '6bde6517-26ec-480a-8c3d-339104c5426b',
      customer_id: 43,
      B_First: 'puteryfe@kellychibale-researchgroup-uct.com',
      B_last: 'test',
      B_Email: 'puteryfe@kellychibale-researchgroup-uct.com',
      B_PhoneNumber: '123456789',
      B_SameAsOrg: true,
      B_Country: 'Bhutan',
      B_County: null,
      B_Town: null,
      B_ZIP: null,
      B_Address1: null,
      B_Address2: null,
      S_First: 'puteryfe@kellychibale-researchgroup-uct.com',
      S_last: 'test',
      S_Email: 'puteryfe@kellychibale-researchgroup-uct.com',
      S_PhoneNumber: '12345678',
      S_SameAsOrg: true,
      S_Country: 'Bhutan',
      S_County: null,
      S_Town: null,
      S_ZIP: null,
      S_Address1: null,
      S_Address2: null
    },
    {
      id: 15,
      add_id: '3af91a90-559c-4bba-87fd-d1455b8b7842',
      customer_id: 44,
      B_First: 'Test ',
      B_last: 'Email',
      B_Email: '735dnphl8g@cashflow35.com',
      B_PhoneNumber: '123456789',
      B_SameAsOrg: true,
      B_Country: 'British Indian Ocean Territory',
      B_County: 'oceans',
      B_Town: 'ocans town',
      B_ZIP: '6757533',
      B_Address1: 'ocanseea 1',
      B_Address2: 'ocanfcs 2',
      S_First: 'Test ',
      S_last: 'Email',
      S_Email: '735dnphl8g@cashflow35.com',
      S_PhoneNumber: '123456789',
      S_SameAsOrg: true,
      S_Country: 'British Indian Ocean Territory',
      S_County: 'oceans',
      S_Town: 'ocans town',
      S_ZIP: '6757533',
      S_Address1: 'ocanseea 1',
      S_Address2: 'ocanfcs 2'
    },
    {
      id: 16,
      add_id: '7e500540-f733-4219-bb74-c5d72f880e2e',
      customer_id: 45,
      B_First: 'Test18Jun22',
      B_last: 'Stem',
      B_Email: 'pexuvywu@abyssmail.com',
      B_PhoneNumber: '123334',
      B_SameAsOrg: true,
      B_Country: 'United Kingdom',
      B_County: 'Oxfordshire',
      B_Town: 'Oxford',
      B_ZIP: '12e4442',
      B_Address1: '22 Oxford Street',
      B_Address2: null,
      S_First: 'Test18Jun22',
      S_last: 'Stem',
      S_Email: 'pexuvywu@abyssmail.com',
      S_PhoneNumber: '1233443',
      S_SameAsOrg: true,
      S_Country: 'United Kingdom',
      S_County: 'Oxfordshire',
      S_Town: 'Oxford',
      S_ZIP: '12e4442',
      S_Address1: '22 Oxford Street',
      S_Address2: null
    },
    {
      id: 17,
      add_id: 'de83e089-586d-4293-b4ba-ee70aed98a18',
      customer_id: 49,
      B_First: 'Ruchi',
      B_last: 'Sharma',
      B_Email: 'ruchi.sharma@stemnovate.co.uk',
      B_PhoneNumber: '07865928070',
      B_SameAsOrg: true,
      B_Country: 'United Kingdom',
      B_County: 'Cambrideshire',
      B_Town: 'Cambridge',
      B_ZIP: 'CB3 0GT',
      B_Address1: '3, Charles Babbage Road',
      B_Address2: null,
      S_First: 'Ruchi',
      S_last: 'Sharma',
      S_Email: 'ruchi.sharma@stemnovate.co.uk',
      S_PhoneNumber: '07865928070',
      S_SameAsOrg: true,
      S_Country: 'United Kingdom',
      S_County: 'Cambrideshire',
      S_Town: 'Cambridge',
      S_ZIP: 'CB3 0GT',
      S_Address1: '3, Charles Babbage Road',
      S_Address2: null
    },
    {
      id: 20,
      add_id: 'b6eb952c-d96f-40e1-81d0-b78d3ee6daeb',
      customer_id: 73,
      B_First: 'Prabir',
      B_last: 'Dutta',
      B_Email: 'prabir.d06@gmail.com',
      B_PhoneNumber: '9039014098',
      B_SameAsOrg: true,
      B_Country: 'India',
      B_County: 'Mumbai',
      B_Town: 'Thane',
      B_ZIP: '490025',
      B_Address1: 'Near Garden',
      B_Address2: null,
      S_First: 'Prabir',
      S_last: 'Dutta',
      S_Email: 'prabir.d06@gmail.com',
      S_PhoneNumber: '9039014098',
      S_SameAsOrg: true,
      S_Country: 'India',
      S_County: 'Mumbai',
      S_Town: 'Thane',
      S_ZIP: '490025',
      S_Address1: 'Near Garden',
      S_Address2: null
    },
    {
      id: 21,
      add_id: 'ff341e1c-6320-470a-9ff7-7d80ad17d9a0',
      customer_id: 56,
      B_First: 'Gaurav',
      B_last: 'Sharma',
      B_Email: 'graphic.designs@stemnovate.co.uk',
      B_PhoneNumber: '8533095592',
      B_SameAsOrg: true,
      B_Country: 'India',
      B_County: 'Uttar Pradesh',
      B_Town: 'MEERUT',
      B_ZIP: '250103',
      B_Address1: 'House no: 264',
      B_Address2: 'Near MSSI INTERNATIONAL PUBLIC SCHOOL',
      S_First: 'Gaurav',
      S_last: 'Sharma',
      S_Email: 'graphic.designs@stemnovate.co.uk',
      S_PhoneNumber: '8533095592',
      S_SameAsOrg: true,
      S_Country: 'India',
      S_County: 'Uttar Pradesh',
      S_Town: 'MEERUT',
      S_ZIP: '250103',
      S_Address1: 'House no: 264',
      S_Address2: 'Near MSSI INTERNATIONAL PUBLIC SCHOOL'
    },
    {
      id: 26,
      add_id: 'beebd7f5-4de7-4f2b-bd9f-ebf8fbc56121',
      customer_id: 119,
      B_First: 'sushma',
      B_last: 'dew',
      B_Email: 'dew.sushma203@gmail.com',
      B_PhoneNumber: '9876543219',
      B_SameAsOrg: true,
      B_Country: 'United Kingdom',
      B_County: 'Dorset',
      B_Town: 'Dorchester',
      B_ZIP: 'DT1',
      B_Address1: 'Dorchester',
      B_Address2: null,
      S_First: 'sushma',
      S_last: 'dew',
      S_Email: 'dew.sushma203@gmail.com',
      S_PhoneNumber: '9876543219',
      S_SameAsOrg: true,
      S_Country: 'United Kingdom',
      S_County: 'Dorset',
      S_Town: 'Dorchester',
      S_ZIP: 'DT1',
      S_Address1: 'Dorchester',
      S_Address2: null
    }
  ]
  
  // =======================================================================================================
  // getUserDetails....
  
  import prisma from "~/lib/prisma"
  // import { getSession } from "next-auth/react"
  
  export default async function handleCustomerDetail(req, res) {
    try {
      const {customer_id} = req.body;
      console.log("customerId",customer_id)
      // const session = await getSession({ req })
      // console.log("my session", session)
      // if (!session) {
      //   // If there is no active session, you can handle it accordingly
      //   res.status(401).json({
      //     status: "401",
      //     message: "Unauthorized",
      //     error: "No active session"
      //   })
      //   return
      // }
  
      // const userId = session.id
      // const userName = session.user.name
      // console.log("session userId", userId)
      // console.log("session userName", userName)
  
      // user: { name: 'sushma', email: 'dew.sushma203@gmail.com' },
      // expires: '2023-12-29T13:26:39.602Z',
      // id: 119
  
      const customerDetail = await prisma.customer_address_details.findMany({
          where: {
              customer_id: customer_id,
          }
      })
      console.log("customerDetail", customerDetail)
  
      res.status(200).json({
          status: "200",
          message: "success",
          result: customerDetail
      })
  } catch (error) {
      console.error(error)
      res.status(500).json({
          status: "500",
          message: "Internal Server Error",
          error: error.message
      })
  }
  }
  
  
  if(Array.isArray(APIPosts))
  null = []
  header header--mobile
            // style: {background: "darkblue", color:"white"},
  
  
  // utilities/ecomerce-helpers.js---->-============================================================
  export function calculateAmount(a){
      return Object.values(a).reduce((a,{quantity:b,price:c})=>a+b*c,0).toFixed(2)
  }
  export function calculateShipping(a){
      return console.log("obj",a),
      // Object.values(a).reduce((a,{quantity:b,product_details:c})=>a+b*c.shipping_cost,0).toFixed(2)
      Object.values(a).reduce((a,{product_details})=>{
          return a + (product_details.shipping_cost || 0);
      },0).toFixed(2)
  }
  export function calculateCartQuantity(a){
      return Object.values(a).reduce((a,{quantity:b})=>a+b,0)
  }
  export function caculateArrayQuantity(a){
      return Object.values(a).reduce(a=>a+1,0)
  }
  export function calculatePercentage(a,b){
      return(a/100*b).toFixed(2)
  }


// ==========================================================================================================
console.log("session===",session)
  // order confirmation session data from  checkout-sessions
  session=== {
    id: 'cs_test_a1eAMw3Xs4Qt1uYrJEyW7ugngNQ4vxuHEu3SOSbovFHPFToDj5IAyQY1oA',
    object: 'checkout.session',
    after_expiration: null,
    allow_promotion_codes: null,
    amount_subtotal: 75000,
    amount_total: 102000,
    automatic_tax: { enabled: false, status: null },
    billing_address_collection: null,
    cancel_url: 'http://localhost:3000/order/order-confirmation/?status=cancel&orderId=d779e2e0-98c6-11ee-a8ac-b9a2b2248cc0',
    client_reference_id: null,
    client_secret: null,
    consent: null,
    consent_collection: null,
    created: 1702369035,
    currency: 'gbp',
    currency_conversion: null,
    custom_fields: [],
    custom_text: {
      after_submit: null,
      shipping_address: null,
      submit: null,
      terms_of_service_acceptance: null
    },
    customer: 'cus_PAmiqU8NNRJuFo',
    customer_creation: null,
    customer_details: {
      address: null,
      email: 'dew.sushma203@gmail.com',
      name: null,
      phone: null,
      tax_exempt: 'none',
      tax_ids: null
    },
    customer_email: null,
    expires_at: 1702455435,
    invoice: null,
    invoice_creation: {
      enabled: false,
      invoice_data: {
        account_tax_ids: null,
        custom_fields: null,
        description: null,
        footer: null,
        metadata: {},
        rendering_options: null
      }
    },
    livemode: false,
    locale: null,
    metadata: {},
    mode: 'payment',
    payment_intent: 'pi_3OMR9TJFLYT9TlXv06XOXPOT',
    payment_link: null,
    payment_method_collection: 'always',
    payment_method_configuration_details: { id: 'pmc_1L5QaQJFLYT9TlXvtYc6E60h', parent: null },
    payment_method_options: {},
    payment_method_types: [ 'card' ],
    payment_status: 'unpaid',
    phone_number_collection: { enabled: false },
    recovered_from: null,
    setup_intent: null,
    shipping: null,
    shipping_address_collection: {
      allowed_countries: [
        'GB', 'US', 'AE', 'AR', 'AT', 'AU', 'BE', 'BG',
        'BO', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ',
        'DE', 'DK', 'DO', 'EE', 'EG', 'ES', 'FI', 'FR',
        'GM', 'GR', 'HK', 'HR', 'HU', 'ID', 'IE', 'IL',
        'IS', 'IT', 'KE', 'KR', 'LI', 'LT', 'LU', 'LV',
        'MT', 'MX', 'NL', 'NO', 'NZ', 'PE', 'PH', 'PL',
        'PT', 'PY', 'RO', 'SA', 'SE', 'SG', 'SI', 'SK',
        'TH', 'TR', 'TT', 'UY', 'ZA', 'BD', 'BJ', 'CI',
        'JM', 'JP', 'MA', 'MC', 'NE', 'RS', 'SN', 'TN',
        'AG', 'BH', 'GH', 'GT', 'GY', 'KW', 'LC', 'MU',
        'NA', 'SM'
      ]
    },
    shipping_options: [
      {
        shipping_amount: 27000,
        shipping_rate: 'shr_1OMR9TJFLYT9TlXvnNrVwhyG'
      }
    ],
    shipping_rate: null,
    status: 'open',
    submit_type: null,
    subscription: null,
    success_url: 'http://localhost:3000/order/order-confirmation/?status=success&orderId=d779e2e0-98c6-11ee-a8ac-b9a2b2248cc0',
    total_details: { amount_discount: 0, amount_shipping: 27000, amount_tax: 0 },
    ui_mode: 'hosted',
    url: 'https://checkout.stripe.com/c/pay/cs_test_a1eAMw3Xs4Qt1uYrJEyW7ugngNQ4vxuHEu3SOSbovFHPFToDj5IAyQY1oA#fidkdWxOYHwnPyd1blpxYHZxWjA0STBKND1PQ0lcUTxRaV1zRmhGN3Y0PDVGYG9BcG9kdDVASEFqSmlUdDJoU3J0MVRhczdqNmptaExgMGk2PWNVSGpKTTFQRlFRdVVRbkx2THNTSUhCdzwwNTV1TEhmN2tWUCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl' 
  }
  rd:  {
    id: 9,
    product_name: 'Primary Human Fibroblasts (SV-HF-1-500-L)',
    product_slug: 'primary-human-fibroblasts-sv-hf-1-500-l',
    LotNumber: '',
    short_description: '<p><span style="font-size: 16px;">Human Fibroblasts, Dermal (skin) derived, Caucasian, Female, 71</span></p>',
    category_id: 13,
    stock: 'In Stock',
    product_image: '1698839077931.jpg',
    product_details: {
      id: 5,
      product_id: 9,
      SKU: '',
      MRP: 0,
      regular_price: 0,
      sale_price: 750,
      currency: 'GBP',
      product_unit: '500K / vial',
      shipping_cost: 50,
      offer_price: 700
    },
    deliver_type: 'Live',
    type: 'Primary Cells',
    category: { category_name: 'Primary Cells  Human' },
    quantity: 1,
    price: 750
  }
  
  

  // checkou form dynamin route makingthis for hide query in address bar when pass data ecommerce to form checkout
  ctx {
    req: IncomingMessage {
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: [],
        flowing: null,
        ended: true,
        endEmitted: false,
        reading: false,
        constructed: true,
        sync: true,
        needReadable: false,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        errorEmitted: false,
        emitClose: true,
        autoDestroy: true,
        destroyed: false,
        errored: null,
        closed: false,
        closeEmitted: false,
        defaultEncoding: 'utf8',
        awaitDrainWriters: null,
        multiAwaitDrain: false,
        readingMore: true,
        dataEmitted: false,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: null
      },
      _events: [Object: null prototype] {
        end: [Array],
        error: [Function (anonymous)]
      },
      _eventsCount: 2,
      _maxListeners: undefined,
      socket: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        parser: [HTTPParser],
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        setEncoding: [Function: socketSetEncoding],
        _paused: false,
        _httpMessage: [ServerResponse],
        timeout: 0,
        [Symbol(async_id_symbol)]: 660101,
        [Symbol(kHandle)]: [TCP],
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
          _idleTimeout: -1,
          _idlePrev: null,
          _idleNext: null,
          _idleStart: 3398017,
          _onTimeout: null,
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: true,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 672689,
          [Symbol(triggerId)]: 672685
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kSetNoDelay)]: false,
        [Symbol(kSetKeepAlive)]: false,
        [Symbol(kSetKeepAliveInitialDelay)]: 0,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(RequestTimeout)]: undefined
      },
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [
        'Host',
        'localhost:3000',
        'Connection',
        'keep-alive',
        'sec-ch-ua',
        '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'x-nextjs-data',
        '1',
        'sec-ch-ua-mobile',
        '?0',
        'User-Agent',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'sec-ch-ua-platform',
        '"Windows"',
        'Accept',
        '*/*',
        'Sec-Fetch-Site',
        'same-origin',
        'Sec-Fetch-Mode',
        'cors',
        'Sec-Fetch-Dest',
        'empty',
        'Referer',
        'http://localhost:3000/shop/shopping-cart',
        'Accept-Encoding',
        'gzip, deflate, br',
        'Accept-Language',
        'en-US,en;q=0.9',
        'Cookie',
        '_gcl_au=1.1.83086437.1703094755; __hs_opt_out=yes; __stripe_mid=510806b9-17c1-4240-abeb-4b3871c4dc608a2971; next-auth.csrf-token=c87f21ac8f4765d03a58df43880fd3a435d5865e48e070f0e9fd2056cae8ff4e%7C713b51f96078b8d4b4b2feb5b9f43ff4dc26143f7d452b3f037509d8caa96d54; next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000; cart=%5B%7B%22id%22%3A9%2C%22quantity%22%3A1%2C%22price%22%3A750%7D%5D; __stripe_sid=a1b4c7c1-12d0-4482-90da-2f464fad2c066511c9; hs-messages-hide-welcome-message=true; hs-messages-is-open=false; next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..OExBTnM-DfTadZM3.Iz1MMB7CLbkNYsl-0kHvHHuplTzwS2Xm9OlUECIYqEz_wVCUBQpSOAz0Cx4LsUxgSk8Bdt9WVze-cKAZI_WNHZ81IYf7aka_WzPuFThvGqhwngX69fkNSPN9qCQFcDs7TOnpIdwRXejJwHqncw4ASC7dALmCXqMRqjNB3IGzLnxIlAHk5h63pMJrGtZ4FUbKT1PYR608IA.Am-fytUFOD0GiwZuv341ag'
      ],
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '/_next/data/development/en/shop/checkout.json?couponDiscount=75.00&maximumShippingCost=100&customerCountry=United+Kingdom&couponProductPrice=750&couponProductName=Primary+Human+Fibroblasts+%28SV-HF-1-500-L%29&discount=10&discountType=Percentage&couponCode=XMAS2023',
      method: 'GET',
      statusCode: null,
      statusMessage: null,
      client: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        parser: [HTTPParser],
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        setEncoding: [Function: socketSetEncoding],
        _paused: false,
        _httpMessage: [ServerResponse],
        timeout: 0,
        [Symbol(async_id_symbol)]: 660101,
        [Symbol(kHandle)]: [TCP],
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
          _idleTimeout: -1,
          _idlePrev: null,
          _idleNext: null,
          _idleStart: 3398017,
          _onTimeout: null,
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: true,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 672689,
          [Symbol(triggerId)]: 672685
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kSetNoDelay)]: false,
        [Symbol(kSetKeepAlive)]: false,
        [Symbol(kSetKeepAliveInitialDelay)]: 0,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(RequestTimeout)]: undefined
      },
      _consuming: false,
      _dumped: false,
      cookies: {
        _gcl_au: '1.1.83086437.1703094755',
        __hs_opt_out: 'yes',
        __stripe_mid: '510806b9-17c1-4240-abeb-4b3871c4dc608a2971',
        'next-auth.csrf-token': 'c87f21ac8f4765d03a58df43880fd3a435d5865e48e070f0e9fd2056cae8ff4e|713b51f96078b8d4b4b2feb5b9f43ff4dc26143f7d452b3f037509d8caa96d54',
        'next-auth.callback-url': 'http://localhost:3000',
        cart: '[{"id":9,"quantity":1,"price":750}]',
        __stripe_sid: 'a1b4c7c1-12d0-4482-90da-2f464fad2c066511c9',
        'hs-messages-hide-welcome-message': 'true',
        'hs-messages-is-open': 'false',
        'next-auth.session-token': 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..OExBTnM-DfTadZM3.Iz1MMB7CLbkNYsl-0kHvHHuplTzwS2Xm9OlUECIYqEz_wVCUBQpSOAz0Cx4LsUxgSk8Bdt9WVze-cKAZI_WNHZ81IYf7aka_WzPuFThvGqhwngX69fkNSPN9qCQFcDs7TOnpIdwRXejJwHqncw4ASC7dALmCXqMRqjNB3IGzLnxIlAHk5h63pMJrGtZ4FUbKT1PYR608IA.Am-fytUFOD0GiwZuv341ag'
      },
      [Symbol(kCapture)]: false,
      [Symbol(kHeaders)]: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'x-nextjs-data': '1',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        accept: '*/*',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        referer: 'http://localhost:3000/shop/shopping-cart',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        cookie: '_gcl_au=1.1.83086437.1703094755; __hs_opt_out=yes; __stripe_mid=510806b9-17c1-4240-abeb-4b3871c4dc608a2971; next-auth.csrf-token=c87f21ac8f4765d03a58df43880fd3a435d5865e48e070f0e9fd2056cae8ff4e%7C713b51f96078b8d4b4b2feb5b9f43ff4dc26143f7d452b3f037509d8caa96d54; next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000; cart=%5B%7B%22id%22%3A9%2C%22quantity%22%3A1%2C%22price%22%3A750%7D%5D; __stripe_sid=a1b4c7c1-12d0-4482-90da-2f464fad2c066511c9; hs-messages-hide-welcome-message=true; hs-messages-is-open=false; next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..OExBTnM-DfTadZM3.Iz1MMB7CLbkNYsl-0kHvHHuplTzwS2Xm9OlUECIYqEz_wVCUBQpSOAz0Cx4LsUxgSk8Bdt9WVze-cKAZI_WNHZ81IYf7aka_WzPuFThvGqhwngX69fkNSPN9qCQFcDs7TOnpIdwRXejJwHqncw4ASC7dALmCXqMRqjNB3IGzLnxIlAHk5h63pMJrGtZ4FUbKT1PYR608IA.Am-fytUFOD0GiwZuv341ag'
      },
      [Symbol(kHeadersCount)]: 30,
      [Symbol(kTrailers)]: null,
      [Symbol(kTrailersCount)]: 0,
      [Symbol(RequestTimeout)]: undefined,
      [Symbol(NextRequestMeta)]: {
        __NEXT_INIT_URL: 'http://localhost:3000/_next/data/development/en/shop/checkout.json?couponDiscount=75.00&maximumShippingCost=100&customerCountry=United+Kingdom&couponProductPrice=750&couponProductName=Primary+Human+Fibroblasts+%28SV-HF-1-500-L%29&discount=10&discountType=Percentage&couponCode=XMAS2023',
        __NEXT_INIT_QUERY: [Object],
        _protocol: 'http',
        __NEXT_CLONABLE_BODY: [Object],
        __nextHadTrailingSlash: false,
        __nextIsLocaleDomain: false
      }
    },
    res: <ref *1> ServerResponse {
      _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      _closed: false,
      socket: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        parser: [HTTPParser],
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        setEncoding: [Function: socketSetEncoding],
        _paused: false,
        _httpMessage: [Circular *1],
        timeout: 0,
        [Symbol(async_id_symbol)]: 660101,
        [Symbol(kHandle)]: [TCP],
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
          _idleTimeout: -1,
          _idlePrev: null,
          _idleNext: null,
          _idleStart: 3398017,
          _onTimeout: null,
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: true,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 672689,
          [Symbol(triggerId)]: 672685
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kSetNoDelay)]: false,
        [Symbol(kSetKeepAlive)]: false,
        [Symbol(kSetKeepAliveInitialDelay)]: 0,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(RequestTimeout)]: undefined
      },
      _header: null,
      _keepAliveTimeout: 5000,
      _onPendingData: [Function: bound updateOutgoingData],
      req: IncomingMessage {
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        socket: [Socket],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        rawHeaders: [Array],
        rawTrailers: [],
        aborted: false,
        upgrade: false,
        url: '/_next/data/development/en/shop/checkout.json?couponDiscount=75.00&maximumShippingCost=100&customerCountry=United+Kingdom&couponProductPrice=750&couponProductName=Primary+Human+Fibroblasts+%28SV-HF-1-500-L%29&discount=10&discountType=Percentage&couponCode=XMAS2023',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Socket],
        _consuming: false,
        _dumped: false,
        cookies: [Object],
        [Symbol(kCapture)]: false,
        [Symbol(kHeaders)]: [Object],
        [Symbol(kHeadersCount)]: 30,
        [Symbol(kTrailers)]: null,
        [Symbol(kTrailersCount)]: 0,
        [Symbol(RequestTimeout)]: undefined,
        [Symbol(NextRequestMeta)]: [Object]
      },
      _sent100: false,
      _expect_continue: false,
      statusCode: 200,
      flush: [Function: flush],
      write: [Function: write],
      end: [Function: end],
      on: [Function: on],
      writeHead: [Function: writeHead],
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype] { 'x-nextjs-matched-path': [Array] }
    },
    query: {
      couponDiscount: '75.00',
      maximumShippingCost: '100',
      customerCountry: 'United Kingdom',
      couponProductPrice: '750',
      couponProductName: 'Primary Human Fibroblasts (SV-HF-1-500-L)',
      discount: '10',
      discountType: 'Percentage',
      couponCode: 'XMAS2023'
    },
    resolvedUrl: '/shop/checkout?couponDiscount=75.00&maximumShippingCost=100&customerCountry=United%20Kingdom&couponProductPrice=750&couponProductName=Primary%20Human%20Fibroblasts%20(SV-HF-1-500-L)&discount=10&discountType=Percentage&couponCode=XMAS2023',
    locales: [ 'en' ],
    locale: 'en',
    defaultLocale: 'en'
  }
  session {
    user: { name: 'Sushma', email: 'dew.sushma203@gmail.com' },
    expires: '2024-01-22T06:21:18.818Z',
    id: 124
  }


  dataArray [
    '100',
    '75.00',
    '750',
    'Primary Human Fibroblasts (SV-HF-1-500-L)',
    '10',
    'Percentage',
    'XMAS2023',
    'United Kingdom'
  ]