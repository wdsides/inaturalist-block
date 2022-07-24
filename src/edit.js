import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes, isSelected } ) {
    function updateUsername( e ){
        setAttributes( {
            username: e.target.value,
            iNatWidgetURL: `https://www.inaturalist.org/observations/${e.target.value}.widget?layout=${attributes.layout}&limit=1000&order=desc&order_by=observed_on&d1=${attributes.date1}&d2=${attributes.date2}`,
        } );
    }

    function updateDate1( e ){
        setAttributes( {
            date1: e.target.value,
            iNatWidgetURL: `https://www.inaturalist.org/observations/${attributes.username}.widget?layout=${attributes.layout}&limit=1000&order=desc&order_by=observed_on&d1=${e.target.value}&d2=${attributes.date2}`,
        } );
    }

    function updateDate2( e ){
        setAttributes( {
            date2: e.target.value,
            iNatWidgetURL: `https://www.inaturalist.org/observations/${attributes.username}.widget?layout=${attributes.layout}&limit=1000&order=desc&order_by=observed_on&d1=${attributes.date1}&d2=${e.target.value}`,
        } );
    }

    function updateLayout( e ){
        setAttributes( {
            layout: e.target.value,
            iNatWidgetURL: `https://www.inaturalist.org/observations/${attributes.username}.widget?layout=${e.target.value}&limit=1000&order=desc&order_by=observed_on&d1=${attributes.date1}&d2=${attributes.date2}`,
        } );
    }

	return (
        <div { ...useBlockProps() }>
            <div class="inat-widget-header">
			    <a href="https://www.inaturalist.org">
					<svg width="202px" height="179px" viewBox="0 0 202 179"><title>iNaturalist</title><g id="iNaturalist-Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M0,20.7263158 C54.5248587,26.3201751 97.3849609,46.3506571 128.580307,80.8177618 C129.79793,82.1630894 133.17907,85.9671053 135.762791,85.025 C138.346512,84.0828947 141.499632,78.1866754 142.878787,76.1338022 C145.044488,72.9101545 151.734884,61.4723684 166.297674,56.7618421 C180.860465,52.0513158 199.313331,57.29323 199.98336,57.5252042 C201.242664,57.9611941 202.513754,58.5328898 201.788146,59.5540524 C201.062539,60.5752149 194.897364,63.0330024 190.708719,71.0598586 C186.227594,79.6472066 183.593875,96.2609609 182.94767,99.9224135 C180.402526,115.000988 174.299302,128.982225 165.472214,140.864406 C149.941743,161.770039 125.979483,176.17799 98.1288182,178.632593 C82.9034426,179.974473 68.2067059,177.594989 54.9232727,172.242093 C71.020061,170.658979 90.50223,163.000959 106.151872,144.665804 C125.897674,121.531579 104.288372,133.543421 85.7325581,130.481579 C72.7319736,128.336389 62.1504527,121.641086 44.3908476,98.9974003 C50.0879988,97.4013289 61.3190036,95.4542789 70.3782277,95.0660826 C53.6217502,91.2098699 31.3919846,80.5885837 21.5565397,64.2256177 C29.4608287,61.4778099 39.861857,62.475544 48.1719022,62.8370987 C16.5208943,43.7475222 2.87054309,33.46405 0,20.7263158 Z M75.6325581,-8.52651283e-14 C77.5030666,0.913766419 105.702313,13.1841017 119.32093,31.5605263 C138.346512,57.2328947 139.051163,81.9631579 133.883721,76.3105263 C121.740896,63.0275681 110.57747,54.5219154 96.772093,44.9855263 C86.2023256,37.6842105 79.1384898,16.8742837 75.6325581,-8.52651283e-14 Z M173.874316,64.0813655 C171.289891,64.308092 169.378097,66.5927128 169.604204,69.1842089 C169.830312,71.775705 172.1087,73.6927294 174.693126,73.4660029 C177.277551,73.2392764 179.189345,70.9546556 178.963237,68.3631595 C178.737129,65.7716635 176.458742,63.854639 173.874316,64.0813655 Z" id="iNaturalist-Logo" fill="#74AC00"></path></g></svg>
                </a>
                Observations
		    </div>
            { (attributes.username && attributes.date1 && attributes.date2 &&
			   attributes.layout ) && ! isSelected ? (
                    <div class="inat-editor-preview">Observations will appear here on the frontend. Click here to change settings.</div>
                ) : (
                    <Placeholder
                        instructions="Enter settings for iNaturalist"
                    >
                    <div class="inat-block-input-form">
                        <span class="inat-block-input-label"><label for="username">Username: </label></span>
                        <input name="username" type="text" onChange={ updateUsername } value={ attributes.username } placeholder="username" />
                        <br />
                        <span class="inat-block-input-label"><label for="daterange">Date range: </label></span>
                        <input name="daterange" type="date" onChange={ updateDate1 } value={ attributes.date1 } placeholder="YYYY-MM-DD" />-
                        <input type="date" onChange={ updateDate2 } value={ attributes.date2 } placeholder="YYYY-MM-DD" />
                        <br />
                        <span class="inat-block-input-label"><label for="layout">Layout: </label></span>
                        <select name="layout" onChange={ updateLayout } value={ attributes.layout }>
                            <option value="large" key="list">list</option>
                            <option value="small" key="grid">grid</option>
                        </select><br />
                    </div>
                    </Placeholder>
			) }
		</div>
	);
}
