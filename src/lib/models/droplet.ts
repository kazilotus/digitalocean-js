import { Region } from './region';
import { Image } from './image';
import { Size } from './size';
import { Networks } from './networks';
import { Kernel } from './kernel';

export interface Droplet {
  id: number;
  name: string;
  memory: number;
  vcpus: number;
  disk: number;
  locked: boolean;
  created_at: string;
  status: string;
  backup_ids: string[];
  snapshot_ids: string[];
  features: string[];
  region: Region;
  image: Image | null;
  size: Size | null;
  size_slug: string;
  networks: Networks | null;
  kernel: Kernel | null;
  next_backup_window: Object | null;
  tags: string[];
  volume_ids: string[];
}

export interface DropletRequest {
  name?: string;
  names?: string[];
  region: string;
  size: string;
  image: number | string;
  ssh_keys: any[];
  backups: boolean;
  ipv6: boolean;
  private_networking: boolean;
  user_data: string;
  monitoring: boolean;
  volumes: any[];
  tags: string[];
}