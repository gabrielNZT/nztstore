import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/Catalog/actions';
import { FILTER_DOWN_PRICE_LABEL, FILTER_MOST_AVALIATION_LABEL, FILTER_NONE_LABEL, FILTER_UP_PRICE_LABEL } from '../messages';

function SelectFilter({ filter }) {
    const dispatch = useDispatch();
    const handleChange = (value) => dispatch(setFilter(value));

    return (
        <Select
            defaultValue="none"
            style={{
                width: 200,
            }}
            value={filter}
            onChange={handleChange}
            options={[
                {
                    value: "none",
                    label: FILTER_NONE_LABEL,
                },
                {
                    value: "mostAvaliation",
                    label: FILTER_MOST_AVALIATION_LABEL,
                },
                {
                    value: "growingPrice",
                    label: FILTER_UP_PRICE_LABEL,
                },
                {
                    value: "descendingPrice",
                    label: FILTER_DOWN_PRICE_LABEL
                }
            ]}
        />
    )
}
export default SelectFilter;