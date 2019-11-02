import React, {useState} from 'react'; 
 
import Paper from '@material-ui/core/Paper'; 
import List from '@material-ui/core/List';
import { List as VirtualList, AutoSizer} from 'react-virtualized';
import ListItem from '@material-ui/core/ListItem';
 
import ListItemText from '@material-ui/core/ListItemText'; 
import './lookahead.scss';
 
function* genListItems() {
    for( let i =1; i < 1000; i++){
        yield `Item ${i}`;
    }
}

export const  ScrollingLists =() => {
    const [items] = useState( [...genListItems()]);
    
    const rowRenderer = ({index, isScrolling, key, style}) => {
        const item = items[index];
        return (
            <ListItem button key={key} style={style}>
                <ListItemText primary={isScrolling ? '...' : item} />
            </ListItem>
        );
    }
    return(
        <Paper>
            <List>
                <AutoSizer disableHeight>
                {
                    ({width}) => (
                        <VirtualList
                            width={width}
                            height={400}
                            rowHeight={50}
                            rowCount={items.length}
                            rowRenderer={rowRenderer}
                            />
                    )
                }
                </AutoSizer>
                </List>
        </Paper>
    )
} 
