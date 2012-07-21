var Formatter = 
{
    torrents: function(table, arr)
    {
        for(var i in arr)
        {
            if(arr[i] == null)
            {
                arr[i] = '';
            }
            else
            {
                switch(iv(i)) {
                    case 2: // size
                    case 4: // downloaded
                    case 5: // uploaded
                        arr[i] = Converter.toFileSize(arr[i]);
                        break;
                        
                    case 3: // progress
                        arr[i] = Converter.round(arr[i], 1) + "%";
                        break;
                        
                    case 6: // ratio
                        arr[i] = (arr[i] == -1) ? "\u221e" : Converter.round(arr[i] / 1000, 3);
                        break;
                        
                    case 7: // dl speed
                    case 8: // ul speed
                        arr[i] = Converter.toSpeed(arr[i]);
                        break;
                        
                    case 13:
                        arr[i] = Converter.toDate(arr[i]);
                        break;
                }
            }
        }
        
        return arr;
    }
};