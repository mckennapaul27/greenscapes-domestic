import l1 from '../images/gardening-landscaping1.jpg'
import l2 from '../images/gardening-landscaping2.jpg'
import l3 from '../images/gardening-landscaping3.jpg'
import l4 from '../images/gardening-landscaping4.jpg'
import l5 from '../images/gardening-landscaping5.jpg'
import l6 from '../images/gardening-landscaping6.jpg'
import l7 from '../images/gardening-landscaping7.jpg'
import l8 from '../images/gardening-landscaping8.jpg'
import l9 from '../images/gardening-landscaping9.jpg'
import l10 from '../images/gardening-landscaping10.jpg'
import l11 from '../images/gardening-landscaping11.jpg'
import l12 from '../images/gardening-landscaping12.jpg'
import domestic1 from '../images/gardening-domestic1.jpeg';
import domestic2 from '../images/gardening-domestic2.jpeg';
import domestic3 from '../images/gardening-domestic3.jpeg';
import turfing1 from '../images/gardening-turfing1.jpeg';
import turfing2 from '../images/gardening-turfing2.jpeg';
import turfing3 from '../images/gardening-turfing3.jpeg';
import turfing4 from '../images/gardening-turfing4.jpeg';
import planting1 from '../images/gardening-services1.jpeg';
import planting2 from '../images/gardening-planting1.jpeg';
import hedgePlanting1 from '../images/gardening-hedge-planting1.jpeg';
import hedgePlanting2 from '../images/gardening-hedge-planting2.jpeg';
import hedgePlanting3 from '../images/gardening-hedge-planting3.jpeg';
import hedgePlanting4 from '../images/gardening-hedge-planting4.jpeg';
import hedgePruning1 from '../images/gardening-hedge-pruning1.jpeg'

const blogs = [ // intro 87 characters
    { 
        date: 'April 17th 2019', 
        title: 'Love Your Garden', 
        intro: 'Do you like your garden and are desperate to spend time enjoying it rather than working on it?',
        link: 'garden-maintenance-service-wilmslow',
        img: 'gardening-blog1.jpg',
        tag: 'Garden Tips' 
    },
    { 
        date: 'April 08, 2019', 
        title: 'Garden Maintenance', 
        intro: 'Spend less time working on garden maintenance and enjoy sitting back and enjoying your space',
        link: 'garden-maintenance-service-stockport',
        img: 'gardening-blog2.jpg',
        tag: 'Services' 
    },
    { 
        date: 'March 15th, 2019', 
        title: 'Spring Maintenance', 
        intro: 'At Greenscapes we cover the full range of gardening services starting with garden maintenance.',
        link: 'spring-garden-maintenance-service-stockport',
        img: 'gardening-blog3.jpg',
        tag: 'Services' 
    },
    { 
        date: 'March 6th, 2019', 
        title: 'Gardening Legalities', 
        intro: 'By law you are can trim any overhanging leaves and branches up to the boundary line',
        link: 'garden-maintenance-legals-wilmslow',
        img: 'gardening-blog4.png',
        tag: 'Garden Tips' 
    },
    { 
        date: 'January 19th, 2019', 
        title: 'Winter Garden Maintenance', 
        intro: 'Winter is the ideal time for garden chores to be done in preparation for Spring',
        link: 'domestic-garden-maintenance-wilmslow',
        img: 'gardening-blog6.jpg',
        tag: 'Garden Tips' 
    },
    { 
        date: 'November 18th, 2018', 
        title: 'Garden Maintenance', 
        intro: "Gardenening is a constant task, whether you are keeping it tidy or planning major changes. ",
        link: 'winter-garden-maintenance',
        img: 'gardening-blog7.jpg',
        tag: 'Garden Tips' 
    },
    { 
        date: 'September 11th, 2018', 
        title: 'Deadhead an Astilbe', 
        intro: 'Originating in Asia, Astilbes are one of those garden plants that are just so easy to love.',
        link: 'how-to-deadhead-an-astilbe',
        img: 'gardening-blog8.jpg',
        tag: 'Garden Tips' 
    },
    { 
        date: 'February 5th, 2018', 
        title: 'Garden Maintenance Tips', 
        intro: 'We all love gardening but domestic garden maintenance can be backbreaking work',
        link: 'domestic-garden-maintenance-tips-wilmslow',
        img: 'gardening-blog5.jpg',
        tag: 'Services' 
    },
]

const services = [
    { 
        title: 'Turfing', 
        src: 'gardening-servicesTurfing.jpeg', 
        desc: 'At Greenscapes we can lift existing lawns, level areas and re-turf using locally sourced quality Cheshire turf. We can provide  instant results to make your lawn look green and attractive immediately. We can re-seed an area if needed',
        id: 'turfing'  
    },
    { 
        title: 'Landscaping', 
        src: 'gardening-servicesLandscaping.jpeg', 
        desc: 'Here at Greenscapes we specialise in driveways, patios, decking, composite decking, walling, fencing and any other landscaping needs you may have',
        id: 'landscaping'  
    },
    { 
        title: 'Planting & Plant Care', 
        src: 'gardening-services1.jpeg', 
        desc: 'We provide a full planting service, where we can provide the plants you require or you can provide them if you prefer. We can offer advice and help you select the right plants for your garden that will give you ongoing enjoyment',
        id: 'planting' 
    },
    { 
        title: 'Garden Maintenance', 
        src: 'gardening-maintenance.jpeg', 
        desc: 'Greenscapes gardening services operate throughout the stockport and cheshire areas. We are proud of our professional service and the reputation we have built'  ,
        id: 'domestic-garden-maintenance'
    },
    { 
        title: 'Hedge & Tree Pruning', 
        src: 'gardening-servicesHedge1.jpeg', 
        desc: 'Greenscapes can provide a trimming and lowering of all types of hedges. We can prune and fell all types of trees to a high standard. We can also arrange stump removal' ,
        id: 'hedge-pruning' 
    },
    { 
        title: 'Hedge Planting', 
        src: 'gardening-servicesHedge2.jpeg', 
        desc: 'We provide a full hedge planting service, where we can provide the hedging you require or you can provide them if you prefer. We can offer advice on how to maintain your hedge after planting or we can maintain it for you' ,
        id: 'hedge-planting' 
    }
]

const landscapingImages = [
    { original: l1, thumbnail: l1, },
    { original: l2, thumbnail: l2, },
    { original: l3, thumbnail: l3, },
    { original: l4, thumbnail: l4, },
    { original: l5, thumbnail: l5, },
    { original: l6, thumbnail: l6, },
    { original: l7, thumbnail: l7, },
    { original: l8, thumbnail: l8, },
    { original: l9, thumbnail: l9, },
    { original: l10, thumbnail: l10, },
    { original: l11, thumbnail: l11, },
    { original: l12, thumbnail: l12, }
]

const domesticImages = [
    { original: domestic1, thumbnail: domestic1 },
    { original: domestic2, thumbnail: domestic2 },
    { original: domestic3, thumbnail: domestic3 }
]

const turfingImages = [
    { original: turfing1 },
    { original: turfing2 },
    { original: turfing3 },
    { original: turfing4 }
]

const plantingImages = [
    { original: planting1 },
    { original: planting2 }
]
const hedgePlantingImages = [
    { original: hedgePlanting1 },
    { original: hedgePlanting2 },
    { original: hedgePlanting3 },
    { original: hedgePlanting4 }
]
const hedgePruningImages = [
    { original: hedgePruning1 }
]
module.exports = {
    blogs,
    services,
    landscapingImages,
    domesticImages,
    turfingImages,
    plantingImages,
    hedgePlantingImages,
    hedgePruningImages
}